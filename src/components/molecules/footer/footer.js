import React from "react";
import { Icon, Stack } from "@auth0/cosmos";
import { Footer, FooterRow } from "./style";
import { FooterAvatar, FooterAvatarImg } from "atoms/avatar/avatar";
import { Contact } from "../modal/style";

export default class extends React.Component {
  render() {
    return (
      <Footer>
        <FooterRow gutter="small">
          <FooterAvatar>
            <FooterAvatarImg
              src="https://avatars2.githubusercontent.com/u/13524654?v=3&s=460"
              alt="avatar"
            />
          </FooterAvatar>
          <Stack align="fill" alignVertical="center" widths={[75, 25]}>
            <Stack align="left" alignVertical="center">
              <span>Full Stack Developer </span>
            </Stack>
            <Stack align="fill" alignVertical="center">
              <span>
                <a
                  href="mailto:ramirezp6856@gmail.com?Subject=Hey%20Phil"
                  target="_top"
                >
                  <Icon name="mail" size="20" color="white" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/7IHd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="brand-github" size="20" color="white" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/ramirezp6856"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="brand-linkedin" size="20" color="white" />
                </a>
              </span>
            </Stack>
          </Stack>
        </FooterRow>
      </Footer>
    );
  }
}
