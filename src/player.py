import random
from termcolor import colored

class Player:
    def __init__(self, name):
        self.name = name
        self.level = 1
        self.health = 100
        self.mana = 50
        self.attack = 10
        self.defense = 5
        self.xp = 0

    def level_up(self):
        self.level += 1
        self.health += random.randint(10, 20)
        self.mana += random.randint(5, 10)
        self.attack += random.randint(2, 5)
        self.defense += random.randint(1, 3)
        print(f"{self.name} leveled up to level {self.level}!")

    def explore_realm(self):
        if random.random() < 0.3:
            item_found = random.choice(["Mystical Sword", "Ancient Scroll", "Healing Potion"])
            print(f"You discovered a {item_found} in the mystical realm!")

        else:
            enemy_strength = random.randint(self.level, self.level + 5)
            print(f"You encountered a powerful foe with strength {enemy_strength}!")

    def embark_on_quest(self):
        quest_type = random.choice(["Retrieve Artifact", "Defeat Demonic Beast", "Seek Ancient Knowledge"])
        print(f"You received a new quest: {quest_type}!")

    def cultivate(self):
        print("You enter a state of deep meditation, cultivating your inner energy.")
        cultivation_gain = random.randint(10, 30)
        self.mana += cultivation_gain
        print(f"You gained {cultivation_gain} mana through cultivation!")

        if self.mana >= 100:
            self.level_up()
            self.mana = 0

    def display_stats(self):
        print(f"\nName: {self.name}\nLevel: {self.level}\nHealth: {self.health}\nMana: {self.mana}\n"
              f"Attack: {self.attack}\nDefense: {self.defense}\nXP: {self.xp}\n")

if __name__ == "__main__":
    # Optional: Add some testing or example usage of the Player class
    player = Player("TestPlayer")
    player.display_stats()
