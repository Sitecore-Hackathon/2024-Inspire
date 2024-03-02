![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2024

- MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
- [Entry form template](ENTRYFORM.md)
  
### ⟹ [Insert your documentation here](ENTRYFORM.md) <<
# Hackathon Submission Entry form

> __Important__  
> 
> Copy and paste the content of this file into README.md or face automatic __disqualification__  
> All headlines and subheadlines shall be retained if not noted otherwise.  
> Fill in text in each section as instructed and then delete the existing text, including this blockquote.

You can find a very good reference to Github flavoured markdown reference in [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). If you want something a bit more WYSIWYG for editing then could use [StackEdit](https://stackedit.io/app) which provides a more user friendly interface for generating the Markdown code. Those of you who are [VS Code fans](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) can edit/preview directly in that interface too.

## Team name
⟹ Inspire

## Category
⟹ Best use of AI

## Description

### Module Name
Sitecore XM Cloud AI Content Assistant

### Description
This module enhances the capability of the Rich Text component in Sitecore XM Cloud. Currently, in the Rich Text component, content authors input the text in RTE field that they want to display on the website after publishing. However, there is no flexibility to generate content within XM Cloud or proofread and rewrite the content provided by content authors.

Our module addresses this limitation by integrating AI technologies, particularly leveraging OpenAI APIs (although other services like Azure AI Service can also be utilized). By leveraging AI, we provide content editors with enhanced functionality directly within the Pages Editor in XM Cloud.

  - Module Purpose
The purpose of this module is to empower content editors with four Out-of-the-Box (OOTB) prompts within the RTE field, each serving a specific function:

1. Generate: This prompt allows content editors to generate content using AI. They can input prompts or keywords, and the AI will generate relevant content based on the input.
2. Rewrite: Content editors can click on this prompt to rewrite the existing content they have written. This feature helps refine and enhance the quality of content by leveraging AI assistance.
3. Proofread: By clicking on this prompt, content editors can perform spell checks and identify grammatical mistakes within the content. AI-powered proofreading ensures the content is polished and error-free before publishing.
4. Summarize: This prompt enables content editors to summarize the content into concise and clear words. It helps in condensing lengthy content into more digestible formats, improving readability and user engagement.
   
Problem Solved
The main problem addressed by this module is the lack of flexibility and efficiency in content creation, proofreading, and rewriting processes within Sitecore XM Cloud. Without AI integration, content editors face challenges in generating high-quality content, refining existing content, and ensuring error-free publications.

How Does This Module Solve It
Our module leverages AI capabilities to streamline and enhance the content creation and editing processes within Sitecore XM Cloud. By providing content editors with AI-powered prompts directly within the RTE field, we enable them to:
- Generate content efficiently based on prompts or keywords.
- Rewrite existing content to improve quality and relevance.
- Proofread content for spelling and grammatical errors.
- Summarize content for better readability and engagement.
- Endless possibilities to add more and more prompts.

Ultimately, this module saves significant time and effort for content editors, allowing them to focus on creating compelling and error-free content for websites powered by Sitecore XM Cloud.


_You can alternately paste a [link here](#docs) to a document within this repo containing the description._

## Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

⟹ [Replace this Video link](#video-link)



## Pre-requisites and Dependencies

⟹ Does your module rely on other Sitecore modules or frameworks?

- List any dependencies
- Or other modules that must be installed
- Or services that must be enabled/configured

_Remove this subsection if your entry does not have any prerequisites other than Sitecore_

## Installation instructions
⟹ Write a short clear step-wise instruction on how to install your module.  

> _A simple well-described installation process is required to win the Hackathon._  
> Feel free to use any of the following tools/formats as part of the installation:
> - Sitecore Package files
> - Docker image builds
> - Sitecore CLI
> - msbuild
> - npm / yarn
> 
> _Do not use_
> - TDS
> - Unicorn
 
1. Log in to the [Deploy app](https://deploy.sitecorecloud.io/)
2. If you are an Organization Admin or Organization Owner in multiple organizations, click the organization where you want to create a project.
3. On the Projects page, click Create project.
4. Enter a name for your project, then click Continue.
5. Choose GitHub as a source control provider by clicking Connect, then Continue.
6. Choose the source code that will be used to create your environment. --> Choose option Use your own code
7. Choose the source control provider account you want to use. If you want to use an existing source control connection, in the Choose GitHub account drop-down menu, click the account you want to use. If you want to use a new source control connection, click Connect to a new account, and follow the steps to authorize the Deploy app in your account.
8. Choose the repository you want to use. In our case it is -  2024-Inspire
9. Choose 2024-Inspire repository and the main branch, then click Continue.
10. Enter a name for your environment, choose whether the environment is a production environment.
11. Review your configuration and, if everything is set up correctly, click Start deployment.
12. Once the Instance is ready, create a new Site. You can create a new Site using the Basic site template.
16. Create an Open AI API Secret Key using this [documentation](https://gptforwork.com/help/gpt-for-docs/setup/create-openai-api-key)
17. In the XM Cloud Deploy App, [create a variable](https://doc.sitecore.com/xmc/en/developers/xm-cloud/environment-variables.html) named NEXT_PUBLIC_CHAT_GPT_KEY and provide the value of Open AI API Secret Keys. You may need to run the build and deploy again to make this variable effective.
18. Go to XM Cloud Page and Drop Rich Text Component on any Page item. You will see our AI Module option.
19. To set up our repo/module in local, follow [this] (https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--setting-up-your-full-stack-xm-cloud-local-development-environment.html)  

### Configuration
⟹ If there are any custom configuration that has to be set manually then remember to add all details here.

_Remove this subsection if your entry does not require any configuration that is not fully covered in the installation instructions already_
1. Create an Open AI API Secret Key using this [documentation](https://gptforwork.com/help/gpt-for-docs/setup/create-openai-api-key)  
2. In the XM Cloud Deploy App, [create a variable](https://doc.sitecore.com/xmc/en/developers/xm-cloud/environment-variables.html) named NEXT_PUBLIC_CHAT_GPT_KEY and provide the value of Open AI API Sercet Keys.
![image](https://github.com/Sitecore-Hackathon/2024-Inspire/assets/36916946/e8663f3b-0c57-4312-ae87-fb76f0611ee9)



## Usage instructions
⟹ Provide documentation about your module, how do the users use your module, where are things located, what do the icons mean, are there any secret shortcuts etc.

Include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](docs/images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://thiscatdoesnotexist.com/)

## Comments
If you'd like to make additional comments that is important for your module entry.
