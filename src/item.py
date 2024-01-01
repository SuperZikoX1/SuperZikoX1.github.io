class Item:
    def __init__(self, name, description):
        self.name = name
        self.description = description

    def use(self, player):
        # Define the default behavior when using the item
        print(f"You used {self.name}. It doesn't seem to have any effect.")

class MysticalSword(Item):
    def __init__(self):
        super().__init__("Mystical Sword", "A powerful sword with ancient runes.")

    def use(self, player):
        player.attack += 10
        print(f"You wielded the {self.name}. Your attack increased by 10 points!")

class AncientScroll(Item):
    def __init__(self):
        super().__init__("Ancient Scroll", "A scroll containing ancient knowledge.")

    def use(self, player):
        player.mana += 20
        print(f"You read the {self.name}. Your mana increased by 20 points!")

class HealingPotion(Item):
    def __init__(self):
        super().__init__("Healing Potion", "A magical potion that restores health.")

    def use(self, player):
        player.health += 30
        print(f"You consumed the {self.name}. Your health increased by 30 points!")

# Add more items as needed
