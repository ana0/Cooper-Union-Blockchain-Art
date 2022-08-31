const ClassToken = artifacts.require('ClassToken');

module.exports = function (deployer) {
  deployer.deploy(ClassToken, 'ClassToken', 'CLS')
};
