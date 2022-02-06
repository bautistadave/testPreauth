 class Item {
     name: string;
     sellIn: number;
     quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

 class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.quality(this.items[i])
            this.updateSellIn(this.items[i])
        }

        return this.items;
    }
    private quality(item: Item){
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    item.quality = item.quality - 1
                }
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1
                if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn < 11) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }
                    if (item.sellIn < 6) {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }
                }
            }
        }
    }
    private updateSellIn(item: Item){
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.sellIn = item.sellIn - 1;
        }
        this.handleIfExpire(item);
    }    

    private handleIfExpire(item: Item) {
        if (item.sellIn < 0) {
            this.handleExpired(item)
        }
    }
    
    private handleExpired(item: Item) {
        if (item.name !== 'Aged Brie') {
            if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.quality > 0) {
                    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                        item.quality = item.quality - 1;
                    }
                }
            } else {
                item.quality = item.quality - item.quality;
            }
        } else {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
            }
        }
    }
}

const items = [
    new Item("+5 Dexterity Vest", 10, 20), 
    new Item("Aged Brie", 2, 0), 
    new Item("Elixir of the Mongoose", 5, 7), 
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), 
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new Item("Conjured Mana Cake", 3, 6)
];  
  
  const gildedRose = new GildedRose(items);
  var days: number = 2;
  for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
      console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  
    });
    console.log();
    gildedRose.updateQuality();
  }