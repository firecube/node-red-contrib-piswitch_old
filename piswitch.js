module.exports = function(RED) {

  function PiSwitchNode(config) {

    RED.nodes.createNode(this, config);
    this.config = config;
    var node = this;

    this.on('input', function(msg) {

      //var rc = require('./piswitch');

      var options = {};
      for (var prop in node.config) {
        if (node.config.hasOwnProperty(prop)) {
          options[prop] = node.config[prop] || msg[prop];
        }
      }
      //rc.setup(options);

      //var code = node.config.code || msg.code;
      //var type = node.config.type || msg.type;
      //var off = node.config.off || msg.off;

      //rc.send(code, type, off);

      node.send(options);
    });

  }

  RED.nodes.registerType('piswitch', PiSwitchNode);

}
