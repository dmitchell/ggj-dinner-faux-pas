var Npc = function(name, descriptor) {
    this.name = name;
    this.happy = descriptor.happy || .6;
    this.gets_it = descriptor.gets_it || .6;
    this.operations = descriptor.operations;
}

Npc.prototype.move = function() {
}

Npc.prototype.react = function(effect) {
    this.happy += effect.claudius[0];  // should this be *=?
    this.gets_it += effect.claudius[1];
}
