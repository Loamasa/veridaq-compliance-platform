// Test script for recommendModelForTokens function
import { recommendModelForTokens, CLAUDE_MODELS, estimateTokenCount } from '../src/hooks/useTranslationManager';

console.log('=== Testing recommendModelForTokens with 10% buffer ===\n');

// Test cases based on implementation plan
const testCases = [
    { tokens: 3000, expectedModel: 'Claude 3 Haiku', reason: '3,300 with buffer < 4,096' },
    { tokens: 3800, expectedModel: 'Claude 3.5 Haiku', reason: '4,180 with buffer > 4,096' },
    { tokens: 7500, expectedModel: 'Claude 3.5 Haiku', reason: '8,250 with buffer > 8,192 but fits in 8,192' },
    { tokens: 8000, expectedModel: 'Claude Haiku 4.5', reason: '8,800 with buffer > 8,192' },
    { tokens: 60000, expectedModel: 'Claude Haiku 4.5', reason: '66,000 with buffer > 8,192' },
    { tokens: 2602, expectedModel: 'Claude 3 Haiku', reason: '2,862 with buffer < 4,096 (user example)' }
];

console.log('Available Models:');
CLAUDE_MODELS.forEach(model => {
    console.log(`  - ${model.name}: maxOutput=${model.maxOutput.toLocaleString()}, cost=${model.cost}`);
});
console.log('');

testCases.forEach(({ tokens, expectedModel, reason }) => {
    const bufferedTokens = Math.ceil(tokens * 1.1);
    const recommendedModelId = recommendModelForTokens(tokens);
    const model = CLAUDE_MODELS.find(m => m.id === recommendedModelId);

    console.log(`Test: ${tokens.toLocaleString()} tokens`);
    console.log(`  Buffered: ${bufferedTokens.toLocaleString()} tokens (10% buffer)`);
    console.log(`  Recommended: ${model?.name || 'Unknown'}`);
    console.log(`  Expected: ${expectedModel}`);
    console.log(`  Reason: ${reason}`);
    console.log(`  ✓ ${model?.name === expectedModel ? 'PASS' : 'FAIL'}`);
    console.log('');
});

// Test with actual blog post content
console.log('=== Testing with sample blog post ===');
const samplePost = {
    content: '<h2>Understanding EU Compliance</h2><p>This is a sample blog post about EU compliance regulations...</p>'.repeat(50)
};

const estimatedTokens = estimateTokenCount(samplePost.content);
const recommendedModel = recommendModelForTokens(estimatedTokens);
const model = CLAUDE_MODELS.find(m => m.id === recommendedModel);

console.log(`Sample post length: ${samplePost.content.length} characters`);
console.log(`Estimated tokens: ${estimatedTokens.toLocaleString()}`);
console.log(`Buffered tokens: ${Math.ceil(estimatedTokens * 1.1).toLocaleString()}`);
console.log(`Recommended model: ${model?.name}`);
console.log(`Model max output: ${model?.maxOutput.toLocaleString()}`);
