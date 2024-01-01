from interface import print_title, get_player_name, get_user_command, display_message, display_invalid_command_message
from player import Player
import random

def main():
    print_title()
    player_name = get_player_name()
    player = Player(player_name)

    while True:
        command = get_user_command()

        if command == ".":
            break

        elif command.lower() == "train":
            player.xp += random.randint(5, 15)
            display_message(f"You gained {player.xp} XP from training!")

            if player.xp >= 100:
                player.level_up()

        # ... (other commands)

        else:
            display_invalid_command_message()

if __name__ == "__main__":
    main()
