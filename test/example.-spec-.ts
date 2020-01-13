//feature
class FriendsList {
  friends = [];
  addFriends(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now a friend`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);
    if (idx === -1) {
      throw new Error("Friend not found");
    } else {
      this.friends.splice(idx, 1);
    }
  }
}

//test

describe("FriendsList", () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });
  it("initializes friends list", () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it("adds a friends to the list", () => {
    friendsList.addFriends("Alejandro");
    expect(friendsList.friends.length).toEqual(1);
  });
  it("announces friendship", () => {
    friendsList.announceFriendship = jest.fn();
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriends("Ricardo");
    expect(friendsList.announceFriendship).toHaveBeenCalledWith("Ricardo");
  });

  describe("remove friend", () => {
    it("removes a friend from the list", () => {
      friendsList.addFriends("Ricardo");
      expect(friendsList.friends[0]).toEqual("Ricardo");
      friendsList.removeFriend("Ricardo");
      expect(friendsList.friends[0]).toBeUndefined();
    });
    it("throws an error as friends does not exist", () => {
      expect(() => friendsList.removeFriend("Ricardo")).toThrow(
        new Error("Friend not found")
      );
    });
  });
});
