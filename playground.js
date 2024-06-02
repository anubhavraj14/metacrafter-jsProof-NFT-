const nftCollection = []

function createNFT(_name, _eyeColor, _outfit, _accessory) {
    const nft = {
        "name": _name,
        "eyeColor": _eyeColor,
        "outfit": _outfit,
        "accessory": _accessory,
    }
    nftCollection.push(nft);
    console.log("Minted: " + _name);
}

function displayNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("\nID: \t " + (i + 1));
        console.log("Name: \t" + nftCollection[i].name);
        console.log("Eye Color: \t" + nftCollection[i].eyeColor);
        console.log("Outfit: \t" + nftCollection[i].outfit);
        console.log("Accessory: \t" + nftCollection[i].accessory);
    }
}

function getTotalNFTs() {
    console.log("\nTotal NFTs: " + nftCollection.length);
}

createNFT("Anubhav", "Blue", "Hoodie", "Gold Chain");
createNFT("Rahul", "Green", "T-Shirt", "Watch");
createNFT("Vikas", "Brown", "Jacket", "Bracelet");
createNFT("Amit", "Black", "Sweater", "Silver Chain");

displayNFTs();
getTotalNFTs();
