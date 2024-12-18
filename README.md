
## Lesson 1 Outline: Introduction to Fabric & How to Use Patterns (for Beginners)

FROM [theairealestateinvestor.com](https://www.theairealestateinvestor.com)

---

### **1. Welcome & What You’ll Learn (2 mins)**  
- **What Is Fabric?**  
  Fabric is a **command-line tool** designed to interact with AI models like OpenAI or local models in a **simple, powerful, and text-centric way**.  
- **Why Use Fabric?**  
  Fabric **reduces friction** when using AI by letting you run tasks like summarizing content, analyzing text, or generating ideas—all from your terminal.  
- **Who Created It?**  
  Fabric was created by **Daniel Misler** to help humans **work smarter** with AI.  
- **This Lesson's Goal**:  
  - Install Fabric and run it for the first time.  
  - Use prebuilt **Patterns** to complete real tasks.  
  - Understand how to customize Fabric to your needs.  

- **AIReInvestor.com Shoutout**: We believe tools like Fabric can help businesses stay ahead of the curve—embrace AI to **save time and improve workflows**.

--- If you need a custom persona built for your busieness reach out - https://www.theairealestateinvestor.com/persona

### **2. Why the Command Line? (2 mins)**  
- Many people are unfamiliar with the terminal, but here’s why you should give it a shot:  
   1. **Speed**: Fabric is **much faster** than switching tabs to a web browser.  
   2. **Customization**: You can modify AI prompts using **Patterns** to suit your needs.  
   3. **Automation**: Build workflows to save repetitive tasks.

---

### **3. Installing Fabric (3 mins)**  

#### **Step 1: Install**  
- go install github.com/danielmiessler/fabric@latest
  
- make sure you have go installed - https://go.dev/dl/
  

#### **Step 2: Set Your API Key**  
- If you’re using OpenAI, create an API key from [OpenAI’s platform](https://platform.openai.com).  
- Store it in Fabric using this command:  
  ```bash
  export OPENAI_API_KEY="your_api_key_here"
  ```  

#### **Step 3: Verify Fabric**  
Run:  
```bash
fabric --help
```  
You’ll see a list of Fabric’s options and patterns.

---

### **4. What Are Patterns? (5 mins)**  
- **Patterns** are reusable prompt templates designed to get high-quality responses from AI.  
- Think of them as **recipes** for solving common problems—ready to use with one command.

---

### **5. Running Your First Pattern (5 mins)**  

Let’s try a few real examples using Fabric’s Patterns:

#### **Example 1: Summarize Text**  
Use the `create_summary` pattern to summarize any input text.  
```bash
fabric -p=create_summary -v="#text:This is a long paragraph of content that I want to summarize quickly."
```  
**What’s Happening**:  
- `-p=create_summary`: Selects the pattern.  
- `-v="#text:[Your Content]"`: Passes the text to the AI for summarization.  

**Output**:  
You’ll get a concise summary, saving you time when reading long documents.

---

#### **Example 2: Extract Wisdom from Content**  
Use the `extract_wisdom` pattern to pull insights from an article or video transcript.  
```bash
fabric -p=extract_wisdom -v="#text:AI will revolutionize every industry, and those who adopt it early will lead the market."
```  
**Why It’s Useful**: This is perfect for skimming content, articles, or YouTube transcripts to find the **key takeaways**.  

---

#### **Example 3: Analyze a Sales Call**  
If you’ve transcribed a call, analyze it for feedback.  
```bash
fabric -p=analyze_sales_call -v="#text:This is the transcript of a sales call where I pitched my product."
```  
**What Happens**:  
Fabric will highlight strengths, weaknesses, and suggestions for improvement.

---

#### **Example 4: Clean Up Text**  
Remove redundant formatting, bad spacing, or messy text with `clean_text`.  
```bash
fabric -p=clean_text -v="#text:This  is    messy  text  that needs   cleanup!"
```  
**Why It’s Useful**: Quickly clean data before using it elsewhere.

---

### **6. Pattern Simplified: How to Read & Customize Patterns (5 mins)**  

Fabric Patterns are easy to break down. Let’s look at a simplified template:

```yaml
# Example pattern for summarizing text
name: create_summary
description: Summarize input text into a concise format.
variables:
  - name: "#text"
    description: "The input text to summarize."
```

**How It Works**:  
- `name`: Pattern name (e.g., `create_summary`).  
- `description`: Explains what the pattern does.  
- `variables`: Inputs (e.g., `#text`) passed to the AI.  

**Creating Your Custom Pattern**:  
Save this structure to a new `.yaml` file, modify it, and Fabric will recognize it.

---

### **7. Integrating Fabric With Your Workflow (5 mins)**  
Once you’re comfortable, here are advanced tips to integrate Fabric into your daily tasks:  

1. **Automate Note-Taking**: Export AI outputs into apps like Obsidian:  
   ```bash
   fabric -p=create_summary -v="#text:Long content here" > notes.md
   ```  

2. **Filter Content**: Use Fabric to decide what to read or ignore:  
   ```bash
   fabric -p=extract_insights -v="#text:Interesting article about AI trends."
   ```  

3. **Record Ideas Instantly**: Use Fabric to capture rough ideas and turn them into blog posts:  
   ```bash
   fabric -p=create_micro_summary -v="#text:Your idea or draft content."
   ```  

---

### **8. Common Fabric Commands Cheat Sheet (3 mins)**  

| **Command**                          | **What It Does**                                  |  
|--------------------------------------|--------------------------------------------------|  
| `fabric -l`                          | List all available patterns                      |  
| `fabric -p=<pattern>`                | Run a pattern                                    |  
| `fabric --help`                      | Show all Fabric commands                         |  
| `fabric -p=create_summary`           | Summarize input text                             |  
| `fabric -p=extract_wisdom`           | Extract key insights from content                |  
| `fabric -p=clean_text`               | Clean and format messy text                      |  

---

### **9. Fabric Philosophy: Augment, Don’t Replace (2 mins)**  
- **Fabric’s Mission**: Help humans **think better** and **work smarter** with AI.  
- **Real-Life Use Cases**: Summarize research, brainstorm ideas, improve note-taking, and filter valuable content.  

By using Fabric, you **save time**, make better decisions, and focus on what matters most.

---

### **10. Next Steps (1 min)**  
- **Install Fabric** and try the Patterns we covered.  
- **Learn More**: Explore Fabric’s GitHub repo and contribute your own Patterns.  
- **Connect**: Visit [AIReInvestor.com](https://theairealestateinvestor.com) to stay ahead with innovative AI tools and strategies.

---

## Final Thoughts  
This lesson gave you a simple start with Fabric:  
1. You installed it.  
2. You ran real patterns for summarizing, extracting insights, and cleaning text.  
3. You learned to customize and integrate Fabric into workflows.  

In **Lesson 2**, we’ll cover advanced workflows and automation!

