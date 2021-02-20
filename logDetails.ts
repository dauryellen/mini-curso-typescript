// type alias
type Uid = number | string | undefined;

function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a title as ${user}.`);
}

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Daury");
logInfo("123", "Daury");

type Platform = "Windows" | "Linux" | "Mac Os";

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("Windows");
