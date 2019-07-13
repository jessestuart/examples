[Website][serverless] • [Email Updates][eepurl] • [Gitter][gitter] •
[Forum][serverless 2] • [Meetups][github] • [Twitter][twitter] •
[Facebook][facebook] • [Contact Us](mailto:hello@serverless.com)

# Serverless Examples

<img align="right" width="300" src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/email/sls-getting-started.gif" />

A collection of ready-to-deploy [Serverless Framework][github 2] services.

## Table of Contents

<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand)
  generated w/ `npm run docs`
-->
<details>
<summary>Click to expand</summary>

- [Getting Started](#getting-started)
- [Examples](#examples)
- [Community Examples](#community-examples)
- [Contributing](#contributing)
  - [Adding example code](#adding-example-code)
  - [Adding a community example](#adding-a-community-example)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Getting Started

If you are new to serverless, we recommend getting started with by creating an
HTTP API Endpoint in [NodeJS][github 3], [Python][github 4], [Java][github 5],
or [Golang][github 6].

## Examples

Each example contains a `README.md` with an explanation about the service and
it's use cases.

**Have an example?** Submit a PR or [open an issue][github 7]. ⚡️

To install any of these you can run:

```bash
serverless install -u https://github.com/serverless/examples/tree/master/folder-name -n my-project
```

<!-- AUTO-GENERATED-CONTENT:START (SERVERLESS_EXAMPLE_TABLE) t generated w/ `npm run docs` -->

| Example                                                                                                                                                                                                                                                                                                                                                                                                                    | Runtime |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| [Aws Dotnet Rest Api With Dynamodb][github 8] <br/> Reading/Writing operations using .NET Core and DynamoDB                                                                                                                                                                                                                                                                                                                | dotnet  |
| [Aws Lambda Layer][github 9]                                                                                                                                                                                                                                                                                                                                                                                               | nodeJS  |
| [Aws Golang Auth Examples][github 10] <br/> These example shows how to run a Golang lambda with authentication                                                                                                                                                                                                                                                                                                             | golang  |
| [Aws Golang Dynamo Stream To Elasticsearch][github 11] <br/> This example deploys a DynamoDB Table, an Elasticsearch Node, and a lambda triggered off of a Dynamo Stream which updates an elasticsearch index with the data from the Dynamo Table                                                                                                                                                                          | golang  |
| [Aws Golang Http Get Post][github 12] <br/> Example on Making Parameterized Get and Post Request with Golang                                                                                                                                                                                                                                                                                                               | golang  |
| [Aws Golang Simple Http Endpoint][github 6] <br/> Example demonstrates how to setup a simple HTTP GET endpoint with golang                                                                                                                                                                                                                                                                                                 | golang  |
| [Aws Golang Stream Kinesis To Elasticsearch][github 13] <br/> Pull data from AWS Kinesis streams and forward to elasticsearch                                                                                                                                                                                                                                                                                              | golang  |
| [Aws Alexa Skill][github 14] <br/> This example demonstrates how to use an AWS Lambdas for your custom Alexa skill.                                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Aws Node Auth0 Cognito Custom Authorizers Api][github 15] <br/> Authorize your API Gateway with either Auth0 or Cognito RS256 tokens.                                                                                                                                                                                                                                                                                     | nodeJS  |
| [Aws Auth0 Api Gateway][github 16] <br/> Demonstration of protecting API gateway endpoints with auth0                                                                                                                                                                                                                                                                                                                      | nodeJS  |
| [Aws Node Dynamic Image Resizer][github 17]                                                                                                                                                                                                                                                                                                                                                                                | nodeJS  |
| [Aws Node Dynamodb Backup][github 18] <br/> Serverless DynamoDB changes backed up to S3                                                                                                                                                                                                                                                                                                                                    | nodeJS  |
| [Aws Env Variables Encrypted In A File][github 19] <br/> Serverless example managing secrets in an encrypted file                                                                                                                                                                                                                                                                                                          | nodeJS  |
| [Aws Env Variables][github 20] <br/> This example demonstrates how to use environment variables for AWS Lambdas.                                                                                                                                                                                                                                                                                                           | nodeJS  |
| [Aws Fetch File And Store In S3][github 21] <br/> Fetch an image from remote source (URL) and then upload the image to a S3 bucket.                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Aws Function Compiled With Babel][github 22] <br/> Demonstrating how to compile all your code with Babel                                                                                                                                                                                                                                                                                                                  | nodeJS  |
| [Serverless Github Check][github 23]                                                                                                                                                                                                                                                                                                                                                                                       | nodeJS  |
| [Aws Github Webhook Listener][github 24] <br/> Extend your github repositories with this github webhook listener                                                                                                                                                                                                                                                                                                           | nodeJS  |
| [Graphql Api And Serverless][github 25]                                                                                                                                                                                                                                                                                                                                                                                    | nodeJS  |
| [Aws Node Graphql Api With Dynamodb][github 26] <br/> A single-module GraphQL endpoint with query and mutation functionality.                                                                                                                                                                                                                                                                                              | nodeJS  |
| [Aws Lambda And Heroku Postgres][github 27] <br/> Shows how to connect AWS Lambda to Heroku Postgres. Uses an api:release Heroku webhook and the Heroku API to handle automatic Heroku Postgres credential rotation.                                                                                                                                                                                                       | nodeJS  |
| [Aws Iot Event][github 28] <br/> Example on how to setup a AWS IoT Rule to send events to a Lambda function                                                                                                                                                                                                                                                                                                                | nodeJS  |
| [Aws Lambda And Mongodb Atlas][github 29] <br/> Shows how to connect AWS Lambda to MongoDB Atlas.                                                                                                                                                                                                                                                                                                                          | nodeJS  |
| [Dropbox][github 30] <br/> dropbox integration                                                                                                                                                                                                                                                                                                                                                                             | nodeJS  |
| [Aws Node Puppeteer][github 31] <br/> When it comes to AWS Lambda function , they have their own limits as follows ![AWS Limits](./images/aws_limits.png) So , When you try to use Puppeteer your deployment package size(unzipped) easily go's above 250 mb because When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. | nodeJS  |
| [Aws Node Rekognition Analysis S3 Image][github 32] <br/> Analyse an Image from an S3 Bucket with Amazon Rekognition                                                                                                                                                                                                                                                                                                       | nodeJS  |
| [Aws Node Restapi Mongodb][github 33] <br/> Serverless REST API with MongoDB using Mongoose and Bluebird                                                                                                                                                                                                                                                                                                                   | nodeJS  |
| [Aws Rest Api Offline][github 34] <br/> Serverless REST API with DynamoDB and offline support                                                                                                                                                                                                                                                                                                                              | nodeJS  |
| [Aws Rest With Dynamodb][github 35] <br/> Serverless CRUD service exposing a REST HTTP interface                                                                                                                                                                                                                                                                                                                           | nodeJS  |
| [Aws Fetch File And Store In S3][github 36] <br/> Fetch an image from remote source (URL) and then upload the image to a S3 bucket.                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Aws Scheduled Cron][github 37] <br/> Example of creating a function that runs as a cron job using the serverless `schedule` event                                                                                                                                                                                                                                                                                         | nodeJS  |
| [Aws Scheduled Weather][github 38] <br/> Example of creating a function that runs as a cron job using the serverless `schedule` event through pulling weather and sending an email daily.                                                                                                                                                                                                                                  | nodeJS  |
| [Aws Serve Dynamic Html Via Http Endpoint][github 39] <br/> Hookup an AWS API Gateway endpoint to a Lambda function to render HTML on a `GET` request                                                                                                                                                                                                                                                                      | nodeJS  |
| [Aws Node Serverless Gong][github 40] <br/> A simple serverless gong using GitHub webhooks and a Slack app                                                                                                                                                                                                                                                                                                                 | nodeJS  |
| [Aws Node Ses Receive Email Body][github 41] <br/> Receive an email, store in S3 bucket, trigger a lambda function.                                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Aws Node Ses Receive Email Header][github 42] <br/> Receive an email, trigger a lambda function to process header.                                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Shared Aws Api Gateway Nodejs][github 43] <br/> A sample of implementing shared API gateway with multiple Node Lambdas.                                                                                                                                                                                                                                                                                                   | nodeJS  |
| [Aws Node Singned Uploads][github 44] <br/> Serverless example for S3 signed uploads                                                                                                                                                                                                                                                                                                                                       | nodeJS  |
| [Aws Serve Simple Http Endpoint][github 3] <br/> Example demonstrates how to setup a simple HTTP GET endpoint                                                                                                                                                                                                                                                                                                              | nodeJS  |
| [Aws Node Simple Transcribe S3][github 45] <br/> Example demonstrates how to setup a lambda function to transcribe audio file                                                                                                                                                                                                                                                                                              | nodeJS  |
| [Aws Single Page App Via Cloudfront][github 46] <br/> Demonstrating how to deploy a Single Page Application with Serverless                                                                                                                                                                                                                                                                                                | nodeJS  |
| [Serverless Single Page App Plugin][github 47] <br/> A plugin to simplify deploying Single Page Application using S3 and CloudFront                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Aws Node Stripe Integration][github 48] <br/> This example for Stripe integration using AWS Lambda and API Gateway.                                                                                                                                                                                                                                                                                                       | nodeJS  |
| [Aws Text Analysis Via Sns Post Processing][github 49] <br/> Example demonstrates how to setup a simple data processing pipeline                                                                                                                                                                                                                                                                                           | nodeJS  |
| [Aws Node Twilio Send Text Message][github 50] <br/> Send a text message via twilio from aws lambda. [See live demo][surge]                                                                                                                                                                                                                                                                                                | nodeJS  |
| [Baddadjokesbot][github 51]                                                                                                                                                                                                                                                                                                                                                                                                | nodeJS  |
| [Nest Serverless][github 52] <br/> serverless app                                                                                                                                                                                                                                                                                                                                                                          | nodeJS  |
| [Typescript Example][github 53]                                                                                                                                                                                                                                                                                                                                                                                            | nodeJS  |
| [Upload To S3 And Postprocess][github 54] <br/> Upload a files to S3 to trigger a lambda function.                                                                                                                                                                                                                                                                                                                         | nodeJS  |
| [Aws Node Vue Nuxt Ssr][github 55] <br/> Sample project for using Nuxt.js to create a server-side rendered Vue.js app on AWS Lambda and AWS API Gateway. Can easily integrate with your own API or 3rd party APIs such as headless CMS, e-commerce or serverless architecture.                                                                                                                                             | nodeJS  |
| [Aws Nodejs Websockets Authorizers][github 56] <br/> Simple example that demonstrates how to use authorizer functions with websocket events                                                                                                                                                                                                                                                                                | nodeJS  |
| [Aws Alexa Skill][github 57] <br/> This example demonstrates how to use an AWS Lambdas for your custom Alexa skill.                                                                                                                                                                                                                                                                                                        | python  |
| [Aws Auth0 Api Gateway][github 58] <br/> Demonstration of protecting API gateway endpoints with auth0                                                                                                                                                                                                                                                                                                                      | python  |
| [Aws Python Line Echo Bot][github 59] <br/> this is echo bot on LINE message                                                                                                                                                                                                                                                                                                                                               | python  |
| [Aws Python Pynamodb S3 Sigurl][github 60] <br/> Serverless signed uploader REST API using pynamodb, s3 generated events, custom log format, and DRY serverless.yml with custom section                                                                                                                                                                                                                                    | python  |
| [Aws Rest With Dynamodb][github 61] <br/> Serverless CRUD service exposing a REST HTTP interface                                                                                                                                                                                                                                                                                                                           | python  |
| [Aws Rest With Faunadb][github 62] <br/> Serverless CRUD service exposing a REST HTTP interface                                                                                                                                                                                                                                                                                                                            | python  |
| [Aws Rest With Pynamodb][github 63] <br/> Serverless CRUD service exposing a REST HTTP interface                                                                                                                                                                                                                                                                                                                           | python  |
| [Aws Scheduled Cron][github 64] <br/> Example of creating a function that runs as a cron job using the serverless `schedule` event                                                                                                                                                                                                                                                                                         | python  |
| [Aws Simple Http Endpoint][github 4] <br/> Example demonstrates how to setup a simple HTTP GET endpoint with python                                                                                                                                                                                                                                                                                                        | python  |
| [Serverless Telegram Bot][github 65] <br/> This example demonstrates how to setup an echo Telegram Bot using the Serverless Framework ⚡🤖                                                                                                                                                                                                                                                                                 | python  |
| [Aws Ruby Line Bot][github 66] <br/> Example demonstrates how to setup a simple Line echo bot on AWS                                                                                                                                                                                                                                                                                                                       | ruby    |
| [Aws Ruby Simple Http Endpoint][github 67] <br/> Example demonstrates how to setup a simple HTTP GET endpoint                                                                                                                                                                                                                                                                                                              | ruby    |
| [Azure Nodejs][github 68] <br/> Azure Functions sample for the Serverless framework                                                                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Azure Node Simple Http Endpoint][github 69] <br/> An example of making http endpoints with the Azure Functions Serverless Framework plugin                                                                                                                                                                                                                                                                                | nodeJS  |
| [Azure Nodejs][github 70] <br/> Azure Functions sample for the Serverless framework                                                                                                                                                                                                                                                                                                                                        | nodeJS  |
| [Google Golang Simple Http Endpoint][github 71] <br/> Example demonstrates how to setup a simple HTTP GET endpoint with golang                                                                                                                                                                                                                                                                                             | golang  |
| [Google Node Simple Http Endpoint][github 72] <br/> An example of making http endpoints with the Google Cloud Functions Serverless Framework plugin.                                                                                                                                                                                                                                                                       | nodeJS  |
| [Gcp Node Typescript Simple][github 73] <br/> Simple HTTP example for GCP functions by Serverless framework with Typescript                                                                                                                                                                                                                                                                                                | nodeJS  |
| [Google Python Simple Http Endpoint][github 74] <br/> Example demonstrates how to setup a simple HTTP GET endpoint with python                                                                                                                                                                                                                                                                                             | python  |
| [Kubeless Python Simple Function][github 75] <br/> This example demonstrates how to setup a simple Python function with Kubeless                                                                                                                                                                                                                                                                                           | python  |
| [Kubeless Python Simple Scheduled Function][github 76] <br/> This example demonstrates how to setup a simple Python function with Kubeless                                                                                                                                                                                                                                                                                 | python  |
| [Openwhisk Go Simple][github 77] <br/> Example demonstrates how to setup a simple Go function with OpenWhisk.                                                                                                                                                                                                                                                                                                              | nodeJS  |
| [Openwhisk Node And Docker Chaining Functions][github 78] <br/> Example of chaining function calls using sequences and docker images.                                                                                                                                                                                                                                                                                      | nodeJS  |
| [Openwhisk Node Chaining Functions][github 79] <br/> Example of chaining function calls using sequences and the sdk.                                                                                                                                                                                                                                                                                                       | nodeJS  |
| [Openwhisk Node Scheduled Cron][github 80] <br/> Example of creating a function that runs as a cron job using the serverless schedule event.                                                                                                                                                                                                                                                                               | nodeJS  |
| [Openwhisk Node Simple Http][github 81] <br/> Example demonstrates how to setup a simple HTTP GET endpoint with OpenWhisk.                                                                                                                                                                                                                                                                                                 | nodeJS  |
| [Openwhisk Node Simple][github 82] <br/> Simple example demonstrating OpenWhisk provider support.                                                                                                                                                                                                                                                                                                                          | nodeJS  |
| [Openwhisk Php Simple][github 83] <br/> Example demonstrates how to setup a simple PHP function with OpenWhisk.                                                                                                                                                                                                                                                                                                            | php     |
| [Openwhisk Python Scheduled Cron][github 84] <br/> Example of creating a Python function that runs as a cron job using the serverless schedule event.                                                                                                                                                                                                                                                                      | python  |
| [Openwhisk Python Simple Http Endpoint][github 85] <br/> Example demonstrates how to setup a simple HTTP GET endpoint with OpenWhisk.                                                                                                                                                                                                                                                                                      | python  |
| [Openwhisk Python Simple][github 86] <br/> Example demonstrates how to setup a simple Python function with OpenWhisk.                                                                                                                                                                                                                                                                                                      | python  |
| [Openwhisk Ruby Simple][github 87] <br/> Example demonstrates how to setup a simple Ruby function with OpenWhisk.                                                                                                                                                                                                                                                                                                          | ruby    |
| [Openwhisk Swift Package With Precompiled Binaries][github 88] <br/> Swift packages and pre-compiled binaries on OpenWhisk.                                                                                                                                                                                                                                                                                                | swift   |
| [Openwhisk Swift Scheduled Cron][github 89] <br/> Example of creating a Swift function that runs as a cron job using the serverless schedule event.                                                                                                                                                                                                                                                                        | swift   |
| [Openwhisk Swift Simple Http Endpoint][github 90] <br/> Example demonstrates how to setup a simple HTTP endpoint using Swift function with OpenWhisk.                                                                                                                                                                                                                                                                      | swift   |
| [Openwhisk Swift Simple][github 91] <br/> Example demonstrates how to setup a simple Swift function with OpenWhisk.                                                                                                                                                                                                                                                                                                        | swift   |

<!-- AUTO-GENERATED-CONTENT:END -->

## Community Examples

[Add an example][github 92]

To install any of these you can run:

```bash
serverless install -u https://github.com/author/project -n my-project
```

<!-- AUTO-GENERATED-CONTENT:START (COMMUNITY_EXAMPLES_TABLE)  generated w/ `npm run docs` -->

| Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |               Author               |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------: |
| **[Aws Api Gateway Serverless Project Written In Go][github 93]** <br/> A serverless project that contains an API Gateway endpoint powered by a Lambda function written in golang and built using [eawsy/aws-lambda-go-shim][github 94].                                                                                                                                                                                                                                                                                   |       [yunspace][github 95]        |
| **[Aws Cognito Custom User Pool Example][github 96]** <br/> Example CloudFormation custom resource backed by a lambda using Cognito User Pools                                                                                                                                                                                                                                                                                                                                                                             |        [bsdkurt][github 97]        |
| **[Aws Lambda Power Tuning (Powered By Step Functions)][github 98]** <br/> Build a [Step Functions][amazon] state machine to optimize your AWS Lambda Function memory/power configuration.                                                                                                                                                                                                                                                                                                                                 |     [alexcasalboni][github 99]     |
| **[Aws Lambda, Amazon Api Gateway, S3, Dynamodb And Cognito Example][github 100]** <br/> Step by step guide how to deploy simple web application on top of AWS Lambda, Amazon API Gateway, S3, DynamoDB and Cognito.                                                                                                                                                                                                                                                                                                       |   [andreivmaksimov][github 101]    |
| **[Aws Demo Java Spring Cloud Function Serverless][github 102]** <br/> If Java is your choice of programming language-Spring Cloud Function,Serverless Framework makes a great technology stack. It boosts developer productivity by decoupling from Vendor specific FaaS API, and deployment activities.                                                                                                                                                                                                                  |      [mbsambangi][github 103]      |
| **[Amazon Kinesis Streams Fan Out Via Kinesis Analytics][github 104]** <br/> Use [Amazon Kinesis Analytics][amazon 2] to fan-out your Kinesis Streams and avoid read throttling.                                                                                                                                                                                                                                                                                                                                           |     [alexcasalboni][github 99]     |
| **[Commenting Api][github 105]** <br/> A commenting api using Serverless Typescript GraphQl and Redis                                                                                                                                                                                                                                                                                                                                                                                                                      |       [AyoubEd][github 106]        |
| **[Daily Instance Backups With Ami Rotation][github 107]** <br/> A simple Python application which scans through your entire AWS account for tagged instances, makes daily AMIs of them, and rotates their backups automatically                                                                                                                                                                                                                                                                                           |     [AndrewFarley][github 108]     |
| **[Dropbucket Serverless File Sharing][github 109]** <br/> A serverless file sharing app powered by Cognito/S3/Lambda/API Gateway. Includes a React single-page app UI and virus scanning.                                                                                                                                                                                                                                                                                                                                 |      [marksteele][github 110]      |
| **[Fotopia Serverless][github 111]** <br/> A photo archive web app including API, storage and face detection using serverless framework                                                                                                                                                                                                                                                                                                                                                                                    |        [mbudm][github 112]         |
| **[Lambda Pubsub Via Sns Example][github 113]** <br/> Example illustrating the flow: Lambda (publisher) => SNS => Lambda (consumer)                                                                                                                                                                                                                                                                                                                                                                                        |        [didil][github 114]         |
| **[Nietzsche][github 115]** <br/> A serverless application that fetches quotes from Goodreads and saves it to DynamoDB with example use cases using `Lambda`, `SNS`, `SQS`, `Step Functions`, `DynamoDB`, `API Gateway`, `CloudWatch`                                                                                                                                                                                                                                                                                      |       [rpidanny][github 116]       |
| **[Open Bot][github 117]** <br/> An unoptionated Github bot driven by a configuration file in the repository                                                                                                                                                                                                                                                                                                                                                                                                               |       [open-bot][github 118]       |
| **[Personal Access Tokens Cron Check][github 119]** <br/> Audit for leaked PAT in your Contentful organization. How to use serverless as cronjobs to keep your Personal Access Tokens secure                                                                                                                                                                                                                                                                                                                               |       [madtrick][github 120]       |
| **[React & Stripe Serverless Ecommerce][github 121]** <br/> Serverless E-Commerce App with AWS Lambda, Stripe and React                                                                                                                                                                                                                                                                                                                                                                                                    | [patrick-michelberger][github 122] |
| **[Realtime Ww2 Alexa Skill][github 123]** <br/> An alexa skill project that's using Alexa SDK. Can also be used for a working example of serverless-webpack (with use of async/await via babel).                                                                                                                                                                                                                                                                                                                          |       [ceilfors][github 124]       |
| **[Run Your Kubernetes Workloads On Amazon Ec2 Spot Instances With Amazon Eks And Lambda Part 1][github 125]** <br/> From this tutorial you'll learn how to add AWS EKS Cluster with Spot Instances to your cloud environment managed by Serverless framework                                                                                                                                                                                                                                                              |   [andreivmaksimov][github 101]    |
| **[Run Your Kubernetes Workloads On Amazon Ec2 Spot Instances With Amazon Eks And Lambda Part 2][github 126]** <br/> From this article you'll learn how to configure AWS Lambda functions to allow them manage your EKS Kubernetes cluster and run triggered jobs                                                                                                                                                                                                                                                          |   [andreivmaksimov][github 101]    |
| **[Sqs Worker With Aws Lambda And Cloudwatch Alarms][github 127]** <br/> Process messages stored in SQS with an [auto-scaled AWS Lambda worker][sbstjn] function.                                                                                                                                                                                                                                                                                                                                                          |        [sbstjn][github 128]        |
| **[Serverless + Lambda + Vpc + Nat + Redis][github 129]** <br/> Demo using API Gateway and Lambda with VPC and NAT to access Internet and AWS Resource                                                                                                                                                                                                                                                                                                                                                                     |        [ittus][github 130]         |
| **[Serverless Analytics][github 131]** <br/> Write your own Google Analytics clone and track website visitors serverless with API Gateway, Kinesis, Lambda, and DynamoDB.                                                                                                                                                                                                                                                                                                                                                  |        [sbstjn][github 128]        |
| **[Serverless Architecture Boilerplate][github 132]** <br/> Boilerplate to organize and deploy big projects using Serverless and CloudFormation on AWS                                                                                                                                                                                                                                                                                                                                                                     |      [msfidelis][github 133]       |
| **[Serverless Cloudwatch Proxy][github 134]** <br/> Logging adapter that consumes log streams from AWS CloudWatch, streams them to other log destinations. Also capable of identying alerts and sending notifications via Slack/Email                                                                                                                                                                                                                                                                                      |      [abbasdgr8][github 135]       |
| **[Serverless Dashboard For Atom Editor][github 136]** <br/> Atom editor package which allows you to deploy and visualize your serverless services with Serverless Framework on your editor.                                                                                                                                                                                                                                                                                                                               |       [horike37][github 137]       |
| **[Serverless Es6/7 Crud Api][github 138]** <br/> [Serverless Stack][serverless-stack] examples of backend CRUD APIs (DynamoDB + Lambda + API Gateway + Cognito User Pool authorizer) for [React.js single-page app][serverless-stack 2]                                                                                                                                                                                                                                                                                   |  [AnomalyInnovations][github 139]  |
| **[Serverless Gitlab Ci][github 140]** <br/> Simple Gitlab CI template for automatic testing and deployments                                                                                                                                                                                                                                                                                                                                                                                                               |      [bvincent1][github 141]       |
| **[Serverless Instagram Crawler][github 142]** <br/> Instagram hashtag Crawler with Lambda & DynamoDB.                                                                                                                                                                                                                                                                                                                                                                                                                     |       [kimcoder][github 143]       |
| **[Serverless Kakao Bot][github 144]** <br/> Easy development for Kakaotalk Bot with Serverless                                                                                                                                                                                                                                                                                                                                                                                                                            |       [JisuPark][github 145]       |
| **[Serverless Lambda S3 Demonstration][github 146]** <br/> This project demonstrates how the Serverless Framework can be used to deploy a NodeJS Lambda function that responds to events in an S3 bucket.                                                                                                                                                                                                                                                                                                                  |     [johncmunson][github 147]      |
| **[Serverless Q&a Example][github 148]** <br/> Inspired by the AWS example forum. A multitenancy Q&A template for surveys, forums and more                                                                                                                                                                                                                                                                                                                                                                                 |    [jacksoncharles][github 149]    |
| **[Serverless Reactjs Universal Rendering Boilerplate][github 150]** <br/> ReactJS web app Starter kit does universal (isomorphic) rendering with Serverless                                                                                                                                                                                                                                                                                                                                                               |      [TylorShin][github 151]       |
| **[Serverless Ssh Command][github 152]** <br/> Example of executing ssh command with OpenWhisk                                                                                                                                                                                                                                                                                                                                                                                                                             |        [upgle][github 153]         |
| **[Serverless Telegram Bot][github 154]** <br/> This example demonstrates how to setup an echo Telegram Bot using the Serverless Framework ⚡🤖                                                                                                                                                                                                                                                                                                                                                                            |    [jonatasbaldin][github 155]     |
| **[Serverless Ffmpeg][github 156]** <br/> Bucket event driven FFMPEG using serverless. Input bucket => Serverless ffmpeg => Output bucket.                                                                                                                                                                                                                                                                                                                                                                                 |     [kvaggelakos][github 157]      |
| **[Serverless Sns Api][github 158]** <br/> Build a SNS service on AWS, support backend API for SNS by device, by group and by user                                                                                                                                                                                                                                                                                                                                                                                         |      [eddielisc][github 159]       |
| **[Serverless Side Rendering With Vue.js And Nuxt.js][github 160]** <br/> Sample project for using Nuxt.js to create a server-side rendered Vue.js app on AWS Lambda and AWS API Gateway. Can easily integrate with your own API or 3rd party APIs such as headless CMS, e-commerce or serverless architecture.                                                                                                                                                                                                            |      [adnanrahic][github 161]      |
| **[Serving Binary Files][github 162]** <br/> Small example showing how to serve binary files using Serverless on AWS with the serverless-apigw-binary plugin, using generated Excel files as an example                                                                                                                                                                                                                                                                                                                    |      [thomastoye][github 163]      |
| **[Spiderless, Web Spider On Serverless][github 164]** <br/> A web spider / scraper / website change detector built with Lambda, API Gateway, DynamoDB and SNS                                                                                                                                                                                                                                                                                                                                                             |       [slashbit][github 165]       |
| **[Stack Overflow Monitor][github 166]** <br/> Monitor Stack Overflow questions and post them in a Slack channel                                                                                                                                                                                                                                                                                                                                                                                                           |       [picsoung][github 167]       |
| **[Adoptable Pet Bot][github 168]** <br/> Tweets adoptable pets using Serverless (Node.js) and AWS Lambda                                                                                                                                                                                                                                                                                                                                                                                                                  |       [lynnaloo][github 169]       |
| **[Aws Mfa Enforce][github 170]** <br/> Serverless function to automate enforcement of Multi-Factor Authentication (MFA) to all AWS IAM users with access to AWS Management Console.                                                                                                                                                                                                                                                                                                                                       |       [Chan9390][github 171]       |
| **[Aws Node Signed Uploads][github 172]** <br/> Upload files larger than 10MB with AWS Lambda and API Gateway. Can be developed and tested locally.                                                                                                                                                                                                                                                                                                                                                                        |     [kalinchernev][github 173]     |
| **[Aws Ses Serverless Example][github 174]** <br/> AWS SES example in NodeJS using lambda                                                                                                                                                                                                                                                                                                                                                                                                                                  |     [lakshmantgld][github 175]     |
| **[Bablebot][github 176]** <br/> Lambda + API Gateway: Zero-to-chatbot in <10 lines of JS. Built-in integrations for Messenger, Telegram, Kik, Line, Twilio, Skype, and Wechat. Or roll your own!                                                                                                                                                                                                                                                                                                                          |   [abiglobalhealth][github 177]    |
| **[Bittman][github 178]** <br/> A serverless project that follows a stock trading algorithm and uses scheduled functions to save data to DynamoDB and send emails through Mailgun.                                                                                                                                                                                                                                                                                                                                         |       [rhlsthrm][github 179]       |
| **[Cordis Serverless][github 180]** <br/> A serverless API for EU Cordis data                                                                                                                                                                                                                                                                                                                                                                                                                                              |      [marzeelabs][github 181]      |
| **[Faultline][github 182]** <br/> Error tracking tool on AWS managed services.                                                                                                                                                                                                                                                                                                                                                                                                                                             |      [faultline][github 183]       |
| **[Giphy Bot][github 184]** <br/> giphy-bot for Facebook chat                                                                                                                                                                                                                                                                                                                                                                                                                                                              |        [tywong][github 185]        |
| **[Grants Api Serverless][github 186]** <br/> ES6 API to consume data from an external API, ingest into Elasticsearch and return a queryable endpoint on top of Elasticsearch                                                                                                                                                                                                                                                                                                                                              |     [comicrelief][github 187]      |
| **[Honeylambda][github 188]** <br/> a simple, serverless application designed to create and monitor URL {honey}tokens, on top of AWS Lambda and Amazon API Gateway                                                                                                                                                                                                                                                                                                                                                         |        [0x4D31][github 189]        |
| **[Jrestless Examples][github 190]** <br/> [JRestless][github 191] (Java / JAX-RS) examples for [API Gateway Functions][github 192] ([plain JAX-RS][github 193], [Spring][github 194], [binary data requests/responses][github 195], [custom authorizers][github 196] and [Cognito User Pool authorizers][github 197]), [SNS Functions][github 198] (asynchronous communication between functions) and [Service Functions][github 199] (synchronous HTTP-like communication between functions - transparent through Feign) |       [bbilger][github 200]        |
| **[Json Server Less λ][github 201]** <br/> A simple & cheap serverless REST API using [json-server][github 202] in combination with AWS Lambda / S3 and the serverless framework                                                                                                                                                                                                                                                                                                                                           |      [pharindoko][github 203]      |
| **[Jwt Lambda Python][github 204]** <br/> Minimal proof-of-concept implementation of JWT with Serverless / AWS Lambda                                                                                                                                                                                                                                                                                                                                                                                                      |      [mikaelmork][github 205]      |
| **[Jwtauthorizr][github 206]** <br/> Custom JWT Authorizer Lambda function for Amazon API Gateway with Bearer JWT                                                                                                                                                                                                                                                                                                                                                                                                          |    [serverlessbuch][github 207]    |
| **[Keboola Developer Portal][github 208]** <br/> Keboola developer portal built with Serverless                                                                                                                                                                                                                                                                                                                                                                                                                            |       [keboola][github 209]        |
| **[Offset Trump][github 210]** <br/> Single page app using Serverless (C# runtime) and S3 site hosting. Pledge to do a good thing for the next four years to offset the potential negative effects of the US Presidency                                                                                                                                                                                                                                                                                                    |        [FLGMwt][github 211]        |
| **[Owntracks Serverless][github 212]** <br/> A serverless implementation of the OwnTracks HTTP backend                                                                                                                                                                                                                                                                                                                                                                                                                     |        [dschep][github 213]        |
| **[Pfs Email Serverless][github 214]** <br/> This is a lambda function created by the serverless framework. It searches through members in our mongodb who have not been sent emails and sends them an email with their custom token to unlock the pledge free stream. It then marks those members off as already receiving the email.                                                                                                                                                                                     |         [SCPR][github 215]         |
| **[Plaid Cashburndown Service][github 216]** <br/> Service for calculating cash burndown with plaid. Frontend code can be found here: https://github.com/cplee/cashburndown-site                                                                                                                                                                                                                                                                                                                                           |        [cplee][github 217]         |
| **[Sc5 Serverless Boilerplate][github 218]** <br/> A boilerplate that contains setup for test-driven development                                                                                                                                                                                                                                                                                                                                                                                                           |         [SC5][github 219]          |
| **[Serverless + Java Dynamodb Imlementation Example][github 220]** <br/> example for java programmers that want to work with AWS-Lambda and DynamoDB                                                                                                                                                                                                                                                                                                                                                                       |      [igorbakman][github 221]      |
| **[Serverless + Lambda Protobuf Responses][github 222]** <br/> Demo using API Gateway and Lambda with Protocol Buffer                                                                                                                                                                                                                                                                                                                                                                                                      |    [theburningmonk][github 223]    |
| **[Serverless + Medium Text To Speech][github 224]** <br/> Serverless-based, text-to-speech service for Medium articles                                                                                                                                                                                                                                                                                                                                                                                                    |    [RafalWilinski][github 225]     |
| **[Serverless Dotnet Boilerplate][github 226]** <br/> A serverless starter solution for .NET Core, ready for local debugging in VS Code, HTTP Endpoint, etc.                                                                                                                                                                                                                                                                                                                                                               |      [pharindoko][github 203]      |
| **[Serverless Aws Rekognition Finpics][github 227]** <br/> Use AWS Rekognition to provide a faces search of finpics.com                                                                                                                                                                                                                                                                                                                                                                                                    |       [rgfindl][github 228]        |
| **[Serverless Blog To Podcast][github 229]** <br/> Service that reads RSS feed and converts the entries to a podcast feed and audio files using Amazon Polly                                                                                                                                                                                                                                                                                                                                                               |         [SC5][github 219]          |
| **[Serverless Cloudwatch Rds Custom Metrics][github 230]** <br/> A NodeJS-based MySQL RDS Data Collection script to push Custom Metrics to Cloudwatch with Serverless                                                                                                                                                                                                                                                                                                                                                      |     [AndrewFarley][github 108]     |
| **[Serverless Delivery Framework][github 231]** <br/> This is a boilerplate for version release pipeline with serverless framework                                                                                                                                                                                                                                                                                                                                                                                         |         [99xt][github 232]         |
| **[Serverless Examples Cached Rds Ws][github 233]** <br/> A serverless framework example project that uses API Gateway, ElastiCache, and RDS PostgreSQL.                                                                                                                                                                                                                                                                                                                                                                   |     [mugglmenzel][github 234]      |
| **[Serverless Facebook Quotebot][github 235]** <br/> 100% Serverless Facebook messenger chatbot which will respond with inspiring quotes                                                                                                                                                                                                                                                                                                                                                                                   |        [pmuens][github 236]        |
| **[Serverless Garden Aid][github 237]** <br/> IoT Garden Aid Backend                                                                                                                                                                                                                                                                                                                                                                                                                                                       |      [garden-aid][github 238]      |
| **[Serverless Graphql Api][github 239]** <br/> Serverless GraphQL API using Lambda and DynamoDB                                                                                                                                                                                                                                                                                                                                                                                                                            |      [boazdejong][github 240]      |
| **[Serverless Html Pdf][github 241]** <br/> Service that convert HTML to PDF using PhantomJS's rasterize example.                                                                                                                                                                                                                                                                                                                                                                                                          |     [calvintychan][github 242]     |
| **[Serverless Image Manager][github 243]** <br/> image upload / download with resizing. Used API gateway's binary support & serverless                                                                                                                                                                                                                                                                                                                                                                                     |      [TylorShin][github 151]       |
| **[Serverless Mailgun Slack][github 244]** <br/> A Serverless function for posting to a Slack Webhook in response to a Mailgun route                                                                                                                                                                                                                                                                                                                                                                                       |       [Marcus-L][github 245]       |
| **[Serverless Messenger Boilerplate][github 246]** <br/> Serverless messenger bot boilerplate                                                                                                                                                                                                                                                                                                                                                                                                                              |         [SC5][github 219]          |
| **[Serverless Modern Koa][github 247]** <br/> Serverless modern koa starter kit                                                                                                                                                                                                                                                                                                                                                                                                                                            |       [barczaG][github 248]        |
| **[Serverless Msg Gateway][github 249]** <br/> A messaging aggregator for kik, skype, twilio, telegram, & messenger. Send and receive messages in a standard format.                                                                                                                                                                                                                                                                                                                                                       |      [yonahforst][github 250]      |
| **[Serverless Newsletter Signup][github 251]** <br/> Saves user details into DynamoDB table. Required values are email, first_name and last_name.                                                                                                                                                                                                                                                                                                                                                                          |        [dschep][github 213]        |
| **[Serverless Node Api Dynamodb Neo4j][github 252]** <br/> Architecture example to stream DynamoDB data to a read-model using Neo4j                                                                                                                                                                                                                                                                                                                                                                                        |        [noetix][github 253]        |
| **[Serverless Npm Registry][github 254]** <br/> Serverless private npm registry, proxy and cache.                                                                                                                                                                                                                                                                                                                                                                                                                          |      [craftship][github 255]       |
| **[Serverless Pokego][github 256]** <br/> Serverless-powered API to fetch nearby Pokemon Go data                                                                                                                                                                                                                                                                                                                                                                                                                           |        [jch254][github 257]        |
| **[Serverless Postgraphql][github 258]** <br/> GraphQL endpoint for PostgreSQL using postgraphql                                                                                                                                                                                                                                                                                                                                                                                                                           |       [rentrop][github 259]        |
| **[Serverless Python Rds Cron][github 260]** <br/> A serverless python example that periodically removes entries from AWS RDS                                                                                                                                                                                                                                                                                                                                                                                              |       [caulagi][github 261]        |
| **[Serverless Python Sample][github 262]** <br/> A simple serverless python sample with REST API endpoints and dependencies                                                                                                                                                                                                                                                                                                                                                                                                |      [bennybauer][github 263]      |
| **[Serverless React Boilerplate][github 264]** <br/> A serverless react boilerplate for offline development                                                                                                                                                                                                                                                                                                                                                                                                                |         [99xt][github 232]         |
| **[Serverless Screenshot][github 265]** <br/> Serverless Screenshot Service using PhantomJS                                                                                                                                                                                                                                                                                                                                                                                                                                |       [svdgraaf][github 266]       |
| **[Serverless Slack Cron][github 267]** <br/> Lambda function which sends messages to Slack channel in regular intervals via cron trigger.                                                                                                                                                                                                                                                                                                                                                                                 |      [ivanderbu2][github 268]      |
| **[Serverless Slack Emojibot][github 269]** <br/> Serverless slack bot for emoji                                                                                                                                                                                                                                                                                                                                                                                                                                           |      [markhobson][github 270]      |
| **[Serverless Slack Trevorbot][github 271]** <br/> Slack bot for info on where in the world is Trevor Gerhardt?                                                                                                                                                                                                                                                                                                                                                                                                            |       [conveyal][github 272]       |
| **[Serverless Url Shortener][github 273]** <br/> A simple url-shortener, using Serverless framework                                                                                                                                                                                                                                                                                                                                                                                                                        |       [aletheia][github 274]       |
| **[Serverless Weekly2pocket App][github 275]** <br/> Serverless-powered API for sending posts to pocket app                                                                                                                                                                                                                                                                                                                                                                                                                |        [s0enke][github 276]        |
| **[Slack Signup Serverless][github 277]** <br/> Serverless signup to Slack and more. Lambda with Python, StepFunctions, and Web front end. Python boilerplate included.                                                                                                                                                                                                                                                                                                                                                    |       [dzimine][github 278]        |
| **[Sls Access Counter][github 279]** <br/> Site visitor counter                                                                                                                                                                                                                                                                                                                                                                                                                                                            |      [takahashim][github 280]      |
| **[Sls Form Mail][github 281]** <br/> Send SNS email from form data                                                                                                                                                                                                                                                                                                                                                                                                                                                        |      [takahashim][github 280]      |
| **[Vanity Stargazer][github 282]** <br/> Github vanity-stargazer is a serverless application to handle posting Github new star gazers to Slack                                                                                                                                                                                                                                                                                                                                                                             |     [silvermullet][github 283]     |
| **[Video Preview And Analysis Service][github 284]** <br/> An event-driven service that generates labels using Amazon Rekognition and creates preview GIF animation from a video file.                                                                                                                                                                                                                                                                                                                                     |       [laardee][github 285]        |

<!-- AUTO-GENERATED-CONTENT:END -->

## Contributing

We are happy to accept more examples from the community. 🎉

### Adding example code

1. Make sure your contribution matches the linting setup for this repo:

Run the linting via

```bash
npm run lint
```

2. Add a `package.json` file in your example with the name of the example and a
   `description` and any `dependencies` used.

3. Regenerate the README.md with the following command

```bash
npm run docs
```

4. Open a new pull request with your example. ⚡️

### Adding a community example

We love hearing about projects happening in the community. Feel free to add your
serverless project to our growing list.

1. Add `link`, `title`, and `description` to the
   [community-examples.json][github 92] file.

2. Open a new pull request with your example. ⚡️

[amazon]: https://aws.amazon.com/step-functions/
[amazon 2]: https://aws.amazon.com/kinesis/analytics/
[eepurl]: http://eepurl.com/b8dv4P
[facebook]: https://www.facebook.com/serverless
[github]: https://github.com/serverless/meetups
[github 10]: https://github.com/serverless/examples/tree/master/aws-golang-auth-examples
[github 100]: https://github.com/andreivmaksimov/serverless-framework-aws-lambda-amazon-api-gateway-s3-dynamodb-and-cognito
[github 101]: http://github.com/andreivmaksimov
[github 102]: https://github.com/mbsambangi/aws-java-spring-cloud-function-demo
[github 103]: http://github.com/mbsambangi
[github 104]: https://github.com/alexcasalboni/kinesis-streams-fan-out-kinesis-analytics
[github 105]: https://github.com/AyoubEd/serverless_typescript_graphQl_commentingService
[github 106]: http://github.com/AyoubEd
[github 107]: https://github.com/AndrewFarley/AWSAutomatedDailyInstanceAMISnapshots
[github 108]: http://github.com/AndrewFarley
[github 109]: https://github.com/marksteele/drop-bucket
[github 11]: https://github.com/serverless/examples/tree/master/aws-golang-dynamo-stream-to-elasticsearch
[github 110]: http://github.com/marksteele
[github 111]: https://github.com/mbudm/fotopia-serverless
[github 112]: http://github.com/mbudm
[github 113]: https://github.com/didil/serverless-lambda-sns-example
[github 114]: http://github.com/didil
[github 115]: https://github.com/rpidanny/Nietzsche
[github 116]: http://github.com/rpidanny
[github 117]: https://github.com/open-bot/open-bot
[github 118]: http://github.com/open-bot
[github 119]: https://github.com/madtrick/cfpat-audit
[github 12]: https://github.com/serverless/examples/tree/master/aws-golang-http-get-post
[github 120]: http://github.com/madtrick
[github 121]: https://github.com/patrick-michelberger/serverless-shop
[github 122]: http://github.com/patrick-michelberger
[github 123]: https://github.com/ceilfors/realtime-ww2-alexa
[github 124]: http://github.com/ceilfors
[github 125]: https://github.com/andreivmaksimov/aws-eks-spot-instances-serverless-framework-demo
[github 126]: https://github.com/andreivmaksimov/aws-eks-spot-instances-serverless-framework-demo/tree/part2
[github 127]: https://github.com/sbstjn/sqs-worker-serverless
[github 128]: http://github.com/sbstjn
[github 129]: https://github.com/ittus/aws-lambda-vpc-nat-examples
[github 13]: https://github.com/serverless/examples/tree/master/aws-golang-stream-kinesis-to-elasticsearch
[github 130]: http://github.com/ittus
[github 131]: https://github.com/sbstjn/serverless-analytics
[github 132]: https://github.com/msfidelis/serverless-architecture-boilerplate
[github 133]: http://github.com/msfidelis
[github 134]: https://github.com/abbasdgr8/cloudwatch-proxy
[github 135]: http://github.com/abbasdgr8
[github 136]: https://github.com/horike37/serverless-dashboard-for-atom
[github 137]: http://github.com/horike37
[github 138]: https://github.com/AnomalyInnovations/serverless-stack-demo-api
[github 139]: http://github.com/AnomalyInnovations
[github 14]: https://github.com/serverless/examples/tree/master/aws-node-alexa-skill
[github 140]: https://github.com/bvincent1/serverless-gitlab-ci
[github 141]: http://github.com/bvincent1
[github 142]: https://github.com/kimcoder/serverless-instagram-crawler
[github 143]: http://github.com/kimcoder
[github 144]: https://github.com/JisuPark/serverless-kakao-bot
[github 145]: http://github.com/JisuPark
[github 146]: https://github.com/johncmunson/serverless-lambda-s3
[github 147]: http://github.com/johncmunson
[github 148]: https://github.com/jacksoncharles/serverless-qa-template-api
[github 149]: http://github.com/jacksoncharles
[github 15]: https://github.com/serverless/examples/tree/master/aws-node-auth0-cognito-custom-authorizers-api
[github 150]: https://github.com/TylorShin/react-universal-in-serverless
[github 151]: http://github.com/TylorShin
[github 152]: https://github.com/upgle/serverless-openwhisk-ssh
[github 153]: http://github.com/upgle
[github 154]: https://github.com/jonatasbaldin/serverless-telegram-bot
[github 155]: http://github.com/jonatasbaldin
[github 156]: https://github.com/kvaggelakos/serverless-ffmpeg
[github 157]: http://github.com/kvaggelakos
[github 158]: https://github.com/eddielisc/serverless-sns-api
[github 159]: http://github.com/eddielisc
[github 16]: https://github.com/serverless/examples/tree/master/aws-node-auth0-custom-authorizers-api
[github 160]: https://github.com/adnanrahic/serverless-side-rendering-vue-nuxt
[github 161]: http://github.com/adnanrahic
[github 162]: https://github.com/thomastoye/serverless-binary-files-xlsx
[github 163]: http://github.com/thomastoye
[github 164]: https://github.com/slashbit/spider-less
[github 165]: http://github.com/slashbit
[github 166]: https://github.com/picsoung/stackoverflowmonitor
[github 167]: http://github.com/picsoung
[github 168]: https://github.com/lynnaloo/adoptable-pet-bot
[github 169]: http://github.com/lynnaloo
[github 17]: https://github.com/serverless/examples/tree/master/aws-node-dynamic-image-resizer
[github 170]: https://github.com/Chan9390/aws-mfa-enforce
[github 171]: http://github.com/Chan9390
[github 172]: https://github.com/kalinchernev/aws-node-signed-uploads
[github 173]: http://github.com/kalinchernev
[github 174]: https://github.com/lakshmantgld/aws-ses-serverless-example
[github 175]: http://github.com/lakshmantgld
[github 176]: https://github.com/abiglobalhealth/babelbot
[github 177]: http://github.com/abiglobalhealth
[github 178]: https://github.com/rhlsthrm/bittman
[github 179]: http://github.com/rhlsthrm
[github 18]: https://github.com/serverless/examples/tree/master/aws-node-dynamodb-backup
[github 180]: https://github.com/marzeelabs/cordis-serverless
[github 181]: http://github.com/marzeelabs
[github 182]: https://github.com/faultline/faultline
[github 183]: http://github.com/faultline
[github 184]: https://github.com/tywong/lambda-workshop-2016/tree/master/giphy-bot
[github 185]: http://github.com/tywong
[github 186]: https://github.com/comicrelief/grants-api-serverless
[github 187]: http://github.com/comicrelief
[github 188]: https://github.com/0x4D31/honeyLambda
[github 189]: http://github.com/0x4D31
[github 19]: https://github.com/serverless/examples/tree/master/aws-node-env-variables-encrypted-in-a-file
[github 190]: https://github.com/bbilger/jrestless-examples
[github 191]: https://github.com/bbilger/jrestless
[github 192]: https://github.com/bbilger/jrestless-examples/tree/master/aws/gateway
[github 193]: https://github.com/bbilger/jrestless-examples/blob/master/aws/gateway/aws-gateway-showcase
[github 194]: https://github.com/bbilger/jrestless-examples/blob/master/aws/gateway/aws-gateway-spring
[github 195]: https://github.com/bbilger/jrestless-examples/blob/master/aws/gateway/aws-gateway-binary
[github 196]: https://github.com/bbilger/jrestless-examples/blob/master/aws/gateway/aws-gateway-security-custom-authorizer
[github 197]: https://github.com/bbilger/jrestless-examples/blob/master/aws/gateway/aws-gateway-security-cognito-authorizer
[github 198]: https://github.com/bbilger/jrestless-examples/blob/master/aws/sns/aws-sns-usage-example
[github 199]: https://github.com/bbilger/jrestless-examples/blob/master/aws/service/aws-service-usage-example
[github 2]: https://github.com/serverless/serverless
[github 20]: https://github.com/serverless/examples/tree/master/aws-node-env-variables
[github 200]: http://github.com/bbilger
[github 201]: https://github.com/pharindoko/json-server-less-lambda
[github 202]: https://github.com/typicode/json-server
[github 203]: http://github.com/pharindoko
[github 204]: https://github.com/mikaelmork/jwt-auth.serverless
[github 205]: http://github.com/mikaelmork
[github 206]: https://github.com/serverlessbuch/jwtAuthorizr
[github 207]: http://github.com/serverlessbuch
[github 208]: https://github.com/keboola/developer-portal
[github 209]: http://github.com/keboola
[github 21]: https://github.com/serverless/examples/tree/master/aws-node-fetch-file-and-store-in-s3
[github 210]: https://github.com/FLGMwt/offset-trump
[github 211]: http://github.com/FLGMwt
[github 212]: https://github.com/dschep/owntracks-serverless
[github 213]: http://github.com/dschep
[github 214]: https://github.com/SCPR/pfs-email-serverless
[github 215]: http://github.com/SCPR
[github 216]: https://github.com/cplee/cashburndown-service
[github 217]: http://github.com/cplee
[github 218]: https://github.com/SC5/sc5-serverless-boilerplate
[github 219]: http://github.com/SC5
[github 22]: https://github.com/serverless/examples/tree/master/aws-node-function-compiled-with-babel
[github 220]: https://github.com/igorbakman/java-lambda-dynamodb
[github 221]: http://github.com/igorbakman
[github 222]: https://github.com/theburningmonk/lambda-protobuf-demo
[github 223]: http://github.com/theburningmonk
[github 224]: https://github.com/RafalWilinski/serverless-medium-text-to-speech
[github 225]: http://github.com/RafalWilinski
[github 226]: https://github.com/pharindoko/serverlessDotNetSample
[github 227]: https://github.com/rgfindl/finpics
[github 228]: http://github.com/rgfindl
[github 229]: https://github.com/SC5/serverless-blog-to-podcast
[github 23]: https://github.com/serverless/examples/tree/master/aws-node-github-check
[github 230]: https://github.com/AndrewFarley/serverless-cloudwatch-rds-custom-metrics
[github 231]: https://github.com/99xt/serverless-delivery-framework
[github 232]: http://github.com/99xt
[github 233]: https://github.com/mugglmenzel/serverless-examples-cached-rds-ws
[github 234]: http://github.com/mugglmenzel
[github 235]: https://github.com/pmuens/quotebot
[github 236]: http://github.com/pmuens
[github 237]: https://github.com/garden-aid/web-bff
[github 238]: http://github.com/garden-aid
[github 239]: https://github.com/boazdejong/serverless-graphql-api
[github 24]: https://github.com/serverless/examples/tree/master/aws-node-github-webhook-listener
[github 240]: http://github.com/boazdejong
[github 241]: https://github.com/calvintychan/serverless-html-pdf
[github 242]: http://github.com/calvintychan
[github 243]: https://github.com/TylorShin/lambda-image-manager
[github 244]: https://github.com/Marcus-L/serverless-mailgun-slack
[github 245]: http://github.com/Marcus-L
[github 246]: https://github.com/SC5/serverless-messenger-boilerplate
[github 247]: https://github.com/barczaG/serverless-modern-koa
[github 248]: http://github.com/barczaG
[github 249]: https://github.com/yonahforst/msg-gateway
[github 25]: https://github.com/serverless/examples/tree/master/aws-node-graphql-and-rds
[github 250]: http://github.com/yonahforst
[github 251]: https://github.com/dschep/serverless-newsletter-signup
[github 252]: https://github.com/noetix/serverless-node-api-dynamodb-neo4j
[github 253]: http://github.com/noetix
[github 254]: https://github.com/craftship/yith
[github 255]: http://github.com/craftship
[github 256]: https://github.com/jch254/pokego-serverless
[github 257]: http://github.com/jch254
[github 258]: https://github.com/rentrop/serverless-postgraphql
[github 259]: http://github.com/rentrop
[github 26]: https://github.com/serverless/examples/tree/master/aws-node-graphql-api-with-dynamodb
[github 260]: https://github.com/caulagi/serverless-python-rds-cron
[github 261]: http://github.com/caulagi
[github 262]: https://github.com/bennybauer/serverless-python-sample
[github 263]: http://github.com/bennybauer
[github 264]: https://github.com/99xt/serverless-react-boilerplate
[github 265]: https://github.com/svdgraaf/serverless-screenshot
[github 266]: http://github.com/svdgraaf
[github 267]: https://github.com/ivanderbu2/serverless-slack-cron
[github 268]: http://github.com/ivanderbu2
[github 269]: https://github.com/markhobson/emojibot
[github 27]: https://github.com/serverless/examples/tree/master/aws-node-heroku-postgres
[github 270]: http://github.com/markhobson
[github 271]: https://github.com/conveyal/trevorbot
[github 272]: http://github.com/conveyal
[github 273]: https://github.com/aletheia/serverless-url-shortener
[github 274]: http://github.com/aletheia
[github 275]: https://github.com/s0enke/weekly2pocket
[github 276]: http://github.com/s0enke
[github 277]: https://github.com/dzimine/slack-signup-serverless
[github 278]: http://github.com/dzimine
[github 279]: https://github.com/takahashim/sls-access-counter
[github 28]: https://github.com/serverless/examples/tree/master/aws-node-iot-event
[github 280]: http://github.com/takahashim
[github 281]: https://github.com/takahashim/sls-form-mail
[github 282]: https://github.com/silvermullet/vanity-stargazer
[github 283]: http://github.com/silvermullet
[github 284]: https://github.com/laardee/video-preview-and-analysis-service
[github 285]: http://github.com/laardee
[github 29]: https://github.com/serverless/examples/tree/master/aws-node-mongodb-atlas
[github 3]: https://github.com/serverless/examples/tree/master/aws-node-simple-http-endpoint
[github 30]: https://github.com/serverless/examples/tree/master/aws-node-oauth-dropbox-api
[github 31]: https://github.com/serverless/examples/tree/master/aws-node-puppeteer
[github 32]: https://github.com/serverless/examples/tree/master/aws-node-rekognition-analysis-s3-image
[github 33]: https://github.com/serverless/examples/tree/master/aws-node-rest-api-mongodb
[github 34]: https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb-and-offline
[github 35]: https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb
[github 36]: https://github.com/serverless/examples/tree/master/aws-node-s3-file-replicator
[github 37]: https://github.com/serverless/examples/tree/master/aws-node-scheduled-cron
[github 38]: https://github.com/serverless/examples/tree/master/aws-node-scheduled-weather
[github 39]: https://github.com/serverless/examples/tree/master/aws-node-serve-dynamic-html-via-http-endpoint
[github 4]: https://github.com/serverless/examples/tree/master/aws-python-simple-http-endpoint
[github 40]: https://github.com/serverless/examples/tree/master/aws-node-serverless-gong
[github 41]: https://github.com/serverless/examples/tree/master/aws-node-ses-receive-email-body
[github 42]: https://github.com/serverless/examples/tree/master/aws-node-ses-receive-email-header
[github 43]: https://github.com/serverless/examples/tree/master/aws-node-shared-gateway
[github 44]: https://github.com/serverless/examples/tree/master/aws-node-signed-uploads
[github 45]: https://github.com/serverless/examples/tree/master/aws-node-simple-transcribe-s3
[github 46]: https://github.com/serverless/examples/tree/master/aws-node-single-page-app-via-cloudfront
[github 47]: https://github.com/serverless/examples/tree/master/aws-node-single-page-app-via-cloudfront/serverless-single-page-app-plugin
[github 48]: https://github.com/serverless/examples/tree/master/aws-node-stripe-integration
[github 49]: https://github.com/serverless/examples/tree/master/aws-node-text-analysis-via-sns-post-processing
[github 5]: https://github.com/serverless/examples/tree/master/aws-java-simple-http-endpoint
[github 50]: https://github.com/serverless/examples/tree/master/aws-node-twilio-send-text-message
[github 51]: https://github.com/serverless/examples/tree/master/aws-node-twitter-joke-bot
[github 52]: https://github.com/serverless/examples/tree/master/aws-node-typescript-nest
[github 53]: https://github.com/serverless/examples/tree/master/aws-node-typescript-rest-api-with-dynamodb
[github 54]: https://github.com/serverless/examples/tree/master/aws-node-upload-to-s3-and-postprocess
[github 55]: https://github.com/serverless/examples/tree/master/aws-node-vue-nuxt-ssr
[github 56]: https://github.com/serverless/examples/tree/master/aws-node-websockets-authorizers
[github 57]: https://github.com/serverless/examples/tree/master/aws-python-alexa-skill
[github 58]: https://github.com/serverless/examples/tree/master/aws-python-auth0-custom-authorizers-api
[github 59]: https://github.com/serverless/examples/tree/master/aws-python-line-echo-bot
[github 6]: https://github.com/serverless/examples/tree/master/aws-golang-simple-http-endpoint
[github 60]: https://github.com/serverless/examples/tree/master/aws-python-pynamodb-s3-sigurl
[github 61]: https://github.com/serverless/examples/tree/master/aws-python-rest-api-with-dynamodb
[github 62]: https://github.com/serverless/examples/tree/master/aws-python-rest-api-with-faunadb
[github 63]: https://github.com/serverless/examples/tree/master/aws-python-rest-api-with-pynamodb
[github 64]: https://github.com/serverless/examples/tree/master/aws-python-scheduled-cron
[github 65]: https://github.com/serverless/examples/tree/master/aws-python-telegram-bot
[github 66]: https://github.com/serverless/examples/tree/master/aws-ruby-line-bot
[github 67]: https://github.com/serverless/examples/tree/master/aws-ruby-simple-http-endpoint
[github 68]: https://github.com/serverless/examples/tree/master/azure-node-line-bot
[github 69]: https://github.com/serverless/examples/tree/master/azure-node-simple-http-endpoint
[github 7]: https://github.com/serverless/examples/issues
[github 70]: https://github.com/serverless/examples/tree/master/azure-node-telegram-bot
[github 71]: https://github.com/serverless/examples/tree/master/google-golang-simple-http-endpoint
[github 72]: https://github.com/serverless/examples/tree/master/google-node-simple-http-endpoint
[github 73]: https://github.com/serverless/examples/tree/master/google-node-typescript-http-endpoint
[github 74]: https://github.com/serverless/examples/tree/master/google-python-simple-http-endpoint
[github 75]: https://github.com/serverless/examples/tree/master/kubeless-python-simple-function
[github 76]: https://github.com/serverless/examples/tree/master/kubeless-python-simple-scheduled-function
[github 77]: https://github.com/serverless/examples/tree/master/openwhisk-go-simple
[github 78]: https://github.com/serverless/examples/tree/master/openwhisk-node-and-docker-chaining-functions
[github 79]: https://github.com/serverless/examples/tree/master/openwhisk-node-chaining-functions
[github 8]: https://github.com/serverless/examples/tree/master/aws-dotnet-rest-api-with-dynamodb/src/DotNetServerless.Lambda
[github 80]: https://github.com/serverless/examples/tree/master/openwhisk-node-scheduled-cron
[github 81]: https://github.com/serverless/examples/tree/master/openwhisk-node-simple-http-endpoint
[github 82]: https://github.com/serverless/examples/tree/master/openwhisk-node-simple
[github 83]: https://github.com/serverless/examples/tree/master/openwhisk-php-simple
[github 84]: https://github.com/serverless/examples/tree/master/openwhisk-python-scheduled-cron
[github 85]: https://github.com/serverless/examples/tree/master/openwhisk-python-simple-http-endpoint
[github 86]: https://github.com/serverless/examples/tree/master/openwhisk-python-simple
[github 87]: https://github.com/serverless/examples/tree/master/openwhisk-ruby-simple
[github 88]: https://github.com/serverless/examples/tree/master/openwhisk-swift-precompiled-binaries
[github 89]: https://github.com/serverless/examples/tree/master/openwhisk-swift-scheduled-cron
[github 9]: https://github.com/serverless/examples/tree/master/aws-ffmpeg-layer
[github 90]: https://github.com/serverless/examples/tree/master/openwhisk-swift-simple-http-endpoint
[github 91]: https://github.com/serverless/examples/tree/master/openwhisk-swift-simple
[github 92]: https://github.com/serverless/examples/edit/master/community-examples.json
[github 93]: https://github.com/yunspace/serverless-golang
[github 94]: https://github.com/eawsy/aws-lambda-go-shim
[github 95]: http://github.com/yunspace
[github 96]: https://github.com/bsdkurt/aws-node-custom-user-pool
[github 97]: http://github.com/bsdkurt
[github 98]: https://github.com/alexcasalboni/aws-lambda-power-tuning
[github 99]: http://github.com/alexcasalboni
[gitter]: https://gitter.im/serverless/serverless
[sbstjn]: https://sbstjn.com/serverless-sqs-worker-with-aws-lambda.html
[serverless]: http://www.serverless.com
[serverless 2]: http://forum.serverless.com
[serverless-stack]: http://serverless-stack.com
[serverless-stack 2]: http://demo.serverless-stack.com
[surge]: http://twilio-serverless-example.surge.sh
[twitter]: https://twitter.com/goserverless
