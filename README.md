# XianxiaSim
Welcome to my newly made Xianxia Simulator ;)

# Xianxia Simulator Game

import random

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

    def display_stats(self):
        print(f"\nName: {self.name}\nLevel: {self.level}\nHealth: {self.health}\nMana: {self.mana}\n"
              f"Attack: {self.attack}\nDefense: {self.defense}\nXP: {self.xp}\n")

def main():
    print("Welcome to the Xianxia Simulator!\n")
    
    # Player creation
    player_name = input("Enter your character's name: ")
    player = Player(player_name)

    while True:
        command = input("\nEnter a command (type '.' to exit): ")

        if command == ".":
            break

        # Implement game logic based on user commands

        # Example: Training
        elif command.lower() == "train":
            player.xp += random.randint(5, 15)
            print(f"You gained {player.xp} XP from training!")

            # Check for level up
            if player.xp >= 100:
                player.level_up()

        # Example: Displaying player stats
        elif command.lower() == "stats":
            player.display_stats()

        else:
            print("Invalid command. Try again.")

if __name__ == "__main__":
    main()

