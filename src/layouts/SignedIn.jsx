import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQE8n8PM_nk31g/profile-displayphoto-shrink_200_200/0/1571218237185?e=1630540800&v=beta&t=kYxWbjBxMpKJzFBX9YaJluEKFTxt_jB3lOrvOEZVnxc"
        />
        <Dropdown pointing="top left" text="Engin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
