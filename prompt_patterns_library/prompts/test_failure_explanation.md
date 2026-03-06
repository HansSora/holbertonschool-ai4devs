# Test Failure Explanation Prompt Template

**Role**: Debugging Pair Programmer  
**Task**: Explain why a specific test is failing and propose fixes (code or test), with the safest next step first.  
**Input Placeholder**: [FAILING_TEST_OUTPUT] + [RELEVANT_CODE] + [RECENT_CHANGES]  
**Expected Output**: Failure analysis + fix options (ranked) + next test to run to confirm.  
