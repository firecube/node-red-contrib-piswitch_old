module.exports = function(RED) {

  function PiSwitchNode(config) {

    RED.nodes.createNode(this, config);
    this.config = config;
    var node = this;

    this.on('input', function(msg) {

      //var rc = require('./piswitch');

      msg.name = node.config.name || msg.name;
      msg.prefix = node.config.prefix || msg.prefix;

      //rc.setup(options);

      //var code = node.config.code || msg.code;
      //var type = node.config.type || msg.type;
      //var off = node.config.off || msg.off;

      //rc.send(code, type, off);

      node.send(msg);
    });

  }

  RED.nodes.registerType('piswitch', PiSwitchNode);

}
