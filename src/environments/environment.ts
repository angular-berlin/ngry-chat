// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  azureSentimentServiceUrl: 'https://northeurope.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
  azureTextAnalysisToken: 'a6b28b568f674e99bd445be3b37401c9',
  twilioTokenURL: 'https://camel-hippopotamus-7503.twil.io/chat-token?identity=user&device=web'
};
