# Fabric Basic Operations & Command Guide

| Switch | Pattern | Mnemonic | Description & Example | Real-World Use Case |
|--------|---------|----------|----------------------|---------------------|
| -p | analyze_paper | "Papers Are Precious" | Analyzes academic papers for key points and methodology | `fabric -p=analyze_paper -v="#text:paste_paper_here"` <br> Researchers reviewing multiple papers quickly |
| -p | create_summary | "Summarize Simply" | Creates concise summaries of longer texts | `fabric -p=create_summary -v="#text:long_text"` <br> Executives reviewing long reports |
| -p | extract_wisdom | "Wisdom Within" | Pulls out key insights and wisdom from content | `fabric -p=extract_wisdom -v="#text:content"` <br> Content creators distilling key points |
| -p | analyze_sales_call | "Sales Signals" | Reviews sales call transcripts for improvement areas | `fabric -p=analyze_sales_call -v="#text:transcript"` <br> Sales teams improving techniques |
| -p | create_mermaid_visualization | "Make Mind Maps" | Generates Mermaid diagrams from text descriptions | `fabric -p=create_mermaid_visualization -v="#text:process"` <br> Developers documenting workflows |
| -p | extract_insights | "Insights Inside" | Extracts key insights from any content | `fabric -p=extract_insights -v="#text:content"` <br> Analysts reviewing market reports |
| -p | analyze_threat_report | "Threat Thinking" | Analyzes security threat reports | `fabric -p=analyze_threat_report -v="#text:report"` <br> Security teams assessing threats |
| -p | create_5_sentence_summary | "Five Fast Facts" | Creates ultra-concise 5-sentence summaries | `fabric -p=create_5_sentence_summary -v="#text:content"` <br> Quick briefings for busy teams |
| -p | extract_predictions | "Predict Patterns" | Identifies predictions and forecasts in content | `fabric -p=extract_predictions -v="#text:content"` <br> Strategic planning teams |
| -p | analyze_personality | "Person Patterns" | Analyzes personality traits from text | `fabric -p=analyze_personality -v="#text:content"` <br> HR teams reviewing applications |

## Common Option Switches

| Switch | Mnemonic | What It Does | Example Use |
|--------|----------|--------------|-------------|
| -t | "Temperature Tuning" | Adjusts creativity (0.0-1.0) | `fabric -p=create_summary -t=0.8` |
| -c | "Copy Clip" | Copies output to clipboard | `fabric -p=extract_wisdom -c` |
| -o | "Output Outside" | Saves output to file | `fabric -p=analyze_paper -o=analysis.md` |
| -s | "Stream Steady" | Streams output in real-time | `fabric -p=create_summary -s` |
| -l | "List Library" | Lists all available patterns | `fabric -l` |
| -m | "Model Mode" | Chooses AI model | `fabric -p=analyze_paper -m=gpt-4` |

## Advanced Operations

| Pattern | Mnemonic | Purpose | Example Command |
|---------|----------|---------|-----------------|
| create_pattern | "Pattern Producer" | Creates new Fabric patterns | `fabric -p=create_pattern -v="#description:new pattern"` |
| extract_wisdom_agents | "Wisdom Workers" | Uses multiple AI agents for deeper analysis | `fabric -p=extract_wisdom_agents -v="#text:content"` |
| create_recursive_outline | "Recursive Researcher" | Creates nested outlines | `fabric -p=create_recursive_outline -v="#text:topic"` |
| analyze_military_strategy | "Military Mind" | Analyzes strategic decisions | `fabric -p=analyze_military_strategy -v="#text:strategy"` |

## YouTube Operations

| Command | Mnemonic | Purpose | Example |
|---------|----------|---------|---------|
| -y | "YouTube Yielder" | Extracts YouTube content | `fabric -y "video_url" -p=extract_wisdom` |
| --comments | "Comment Collector" | Analyzes video comments | `fabric -y "video_url" --comments` |
| --transcript | "Transcript Taker" | Grabs video transcript | `fabric -y "video_url" --transcript` |

## Context & Session Management

| Switch | Mnemonic | Purpose | Example |
|--------|----------|---------|---------|
| -C | "Context Keeper" | Sets conversation context | `fabric -C=business -p=analyze_paper` |
| -w | "Wipe Workspace" | Clears current context | `fabric -w` |
| -W | "Wipe Whole Session" | Clears entire session | `fabric -W` |

## Tips for Remembering Commands

1. **Pattern Prefix**: All pattern-based commands start with `-p=`
2. **Variable Values**: Use `-v="#variable:value"` format
3. **Output Options**: Think "out" for -o (output to file)
4. **Context Control**: Capital -C for Context, lowercase -w for wipe
5. **YouTube Tools**: -y for YouTube, always needs URL in quotes

## Best Practices

1. Start with `-l` to list available patterns
2. Use `-h` for help on any command
3. Test with small inputs before large batches
4. Save important outputs with `-o`
5. Use `-c` for quick clipboard access
6. Adjust temperature (-t) for creativity vs precision

