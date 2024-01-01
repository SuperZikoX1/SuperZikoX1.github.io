from termcolor import colored

def print_title():
    title = " Xianxia Simulator "
    colored_title = colored(title, 'yellow', attrs=['bold'])
    print(colored_title)

def get_player_name():
    return input("Enter your character's name: ")

def get_user_command():
    return input("\nEnter a command (type '.' to exit): ")

def display_message(message):
    print(message)

def display_invalid_command_message():
    print("Invalid command. Try again.")
