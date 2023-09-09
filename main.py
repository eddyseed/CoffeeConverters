class AuthenticationSystem:
    _username_only_array = []
    _password_only_array = []
    def register_a_new_user(self):
        f_username = ""
        f_password = ""
        while True:
            c_username = str(input("(username)>:")).lower()
            if c_username.isspace():print("!Username can't be empty!")
            elif len(c_username)<=4:print("!Username can't be short!")
            elif c_username in self._username_only_array:print("!Username already exists!")
            else:
                f_username = c_username.strip()
                break
        while True:
            c_password = str(input("(password)>:")).lower()
            if c_password.isspace():print("!Password can't be empty!")
            elif len(c_password)<=8:print("!Password can't be short!")
            elif c_password in self._password_only_array:print("!Username already exists!")
            else:
                f_password = c_password.strip()
                break
        self.push_a_new_user(f_username,f_password)
        print(self._username_only_array,self._password_only_array)
    def push_a_new_user(self, user, passwd):
        if not isinstance(user, str):
            print("Invalid Username Detected")
            return False
        elif not isinstance(passwd, str):
            print("Invalid Password Detected")
            return False
        else:
            self._username_only_array.append(user)
            self._password_only_array.append(passwd)
            print("Successfully User Registered")
            return True

Rohan = AuthenticationSystem()
Rohan.register_a_new_user()