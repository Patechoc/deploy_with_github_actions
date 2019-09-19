module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/deploy_with_github_actions/'
        : '/'
}
