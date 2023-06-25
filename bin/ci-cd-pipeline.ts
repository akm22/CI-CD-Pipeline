#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdPipelineStack } from '../lib/ci-cd-pipeline-stack';

const app = new cdk.App();
new CiCdPipelineStack(app, 'CiCdPipelineStack', { // creating new instance of stack
  env: {
    account: '648312152549',
    region: 'ap-south-1', 
  }
});

app.synth(); // bootstrap