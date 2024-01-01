from player import Player  # Assuming you have a Player class in a separate file

def print_title():
    title = " Xianxia Simulator "
    colored_title = colored(title, 'yellow', attrs=['bold'])
    print(colored_title)

def main():
    print_title()
    player_name = input("Enter your character's name: ")
    player = Player(player_name)

    while True:
        command = input("\nEnter a command (type '.' to exit): ")

        if command == ".":
            break

        elif command.lower() == "train":
            player.xp += random.randint(5, 15)
            print(f"You gained {player.xp} XP from training!")

            if player.xp >= 100:
                player.level_up()

        elif command.lower() == "explore":
            player.explore_realm()

        elif command.lower() == "quest":
            player.embark_on_quest()

        elif command.lower() == "cultivate":
            player.cultivate()

        elif command.lower() == "stats":
            player.display_stats()

        else:
            print("Invalid command. Try again.")

if __name__ == "__main__":
    main()

