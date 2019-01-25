function SquareReader() {
}

SquareReader.prototype.setup = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SquareReader", "setup", []);
};

SquareReader.prototype.authorizeReaderSDKIfNeeded = function (params, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SquareReader", "authorizeReaderSDKIfNeeded", [params]);
};

SquareReader.prototype.startCheckout = function (params, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SquareReader", "startCheckout", [params]);
};

SquareReader.prototype.pairCardReaders = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SquareReader", "pairCardReaders", []);
};

SquareReader.install = function () {
  window.squarereader = new SquareReader();
  return window.squarereader;
};

cordova.addConstructor(SquareReader.install);
