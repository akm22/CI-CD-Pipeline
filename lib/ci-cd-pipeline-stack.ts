import { Stack , StackProps} from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class CiCdPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'CICDPipeline', 
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('akm22/CI-CD-Pipeline', 'main'), 
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      }),
    }); 
  }
}

