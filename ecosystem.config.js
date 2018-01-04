module.exports = {
  apps: [{
    name: 'gangsta-node-1',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-204-191-213.compute-1.amazonaws.com',
      key: '~/.ssh/nodeJsApp.pem',
      ref: 'origin/master',
      repo: 'https://github.com/MauriceMickens/gangsta-node-1.git',
      path: '/home/ubuntu/gangsta-node-1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
