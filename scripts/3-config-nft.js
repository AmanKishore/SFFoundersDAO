import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7B0e829ADcA977f215f61e54270f8307c0888145",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "SF Skyline",
        description: "This NFT will give you access to SFFoundersDAO!",
        image: readFileSync("scripts/assets/sf.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
