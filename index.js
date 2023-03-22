/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let factory;
if (process.env.NODE_ENV === "production") {
  factory = await import("./factoryWithThrowingShims.js");
} else {
  factory = await import("./factoryWithTypeCheckers.js");
}

export default factory.default();
