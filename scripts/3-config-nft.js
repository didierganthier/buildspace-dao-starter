import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xe76c0Eb75D506e5aedA686AB4E0d6D1ed9e5a052");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "MacUsers Membership",
        description: "This NFT will give you access to MacUsers!",
        image: readFileSync("scripts/assets/cool.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();