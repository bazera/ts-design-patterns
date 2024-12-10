// Command Pattern (Behavioral)

/*

Encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

*/

interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  on() {
    console.log('turning the lights on');
  }

  off() {
    console.log('turning the lights off');
  }
}

class Stereo {
  on() {
    console.log('stereo on');
  }

  setCD() {
    console.log('stereo set cd');
  }

  setVolume(volume: number) {
    console.log('stereo set volume', volume);
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}
class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute() {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  undo() {}
}

class SimpleRemoteControl {
  slot: Command | undefined;

  constructor() {}

  setCommand(command: Command) {
    this.slot = command;
  }

  buttonWasPressed() {
    this.slot?.execute();
  }
}

class RemoteControlV2 {
  private onCommands: Function[] = [];
  private offCommands: Function[] = [];

  constructor() {}

  setCommand(slot: number, onCommand: () => void, offCommand: () => void) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot]();
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot]();
  }
}
class RemoteControlV1 {
  private onCommands: Command[] = [];
  private offCommands: Command[] = [];
  private undoCommand: Command | undefined;

  constructor() {}

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed() {
    this.undoCommand?.undo();
  }
}

const remote = new RemoteControlV1();

const light = new Light();
const stereo = new Stereo();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const stereoOnCommand = new StereoOnWithCDCommand(stereo);

remote.setCommand(0, lightOnCommand, lightOffCommand);
// remote.setCommand(1, stereoOnCommand, lightOffCommand);
remote.onButtonWasPushed(0);
remote.offButtonWasPushed(0);
remote.undoButtonWasPushed();
// remote.onButtonWasPushed(1);
