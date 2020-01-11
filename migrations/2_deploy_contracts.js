var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var AtlasToken = artifacts.require("./AtlasToken.sol");

module.exports = function(deployer) {
  deployer.deploy(AtlasToken);
};
