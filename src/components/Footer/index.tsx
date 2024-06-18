import styled from 'styled-components/macro'
import { ReactSVG } from 'react-svg'
import { useDarkModeManager } from 'state/user/hooks'

import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import XLogo from '../../assets/svg/media/X.svg'
import DiscordLogo from '../../assets/svg/media/discord.svg'
import TelegramLogo from '../../assets/svg/media/telegram.svg'
import MediumLogo from '../../assets/svg/media/medium.svg'

const FooterContain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 0;

  @media (max-width: 960px) {
    display: none;
    /* position: fixed;
    bottom: 72px;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 0 0 20px; */
  }
`
const FooterContext = styled.div`
  max-width: 980px;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  @media (max-width: 960px) {
    padding: 0 16px;
  }
`

const DomainBaseInfo = styled.div`
  display: block;
  width: 100%;
  @media (max-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`
const Left = styled.div``
const Right = styled.div`
  margin-top: 20px;
  @media (max-width: 960px) {
    margin-top: 0px;
  }
`
const GrayText = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.secondary70};
  font-size: 14px;

  @media (max-width: 960px) {
    margin-top: 6px;
  }
`
const Slogen = styled(GrayText)`
  margin-top: 12px;
  @media (max-width: 960px) {
    margin-top: 6px;
  }
`

const Medias = styled.div`
  display: flex;
  gap: 12px;
`
const MediaLink = styled.a`
  & path {
    fill: ${({ theme }) => theme.secondary70};
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.textPrimary};
      fill-opacity: 1;
    }
  }
`
const PLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;

  & > div {
    width: 128px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`
const LinkTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textPrimary};
`
const OutLink = styled.a`
  color: ${({ theme }) => theme.textSecondary70};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.textPrimary};
    transition: all 0.15s;
  }
`

const medias = [
  { name: 'twitter', href: 'https://twitter.com/0xDTX', Icon: XLogo },
  { name: 'discord', href: 'https://discord.com/invite/0xdtx', Icon: DiscordLogo },
  { name: 'telegram', href: 'https://t.me/dtxchannel', Icon: TelegramLogo },
  { name: 'medium', href: 'https://0xdtx.medium.com/', Icon: MediumLogo },
]

const PERT_ORIGIN = 'https://dtx.trade'
const footerLinks = [
  {
    name: 'Products',
    links: [
      { name: 'Dashboard', href: PERT_ORIGIN + '/dashboard/overview', isOutLink: false },
      { name: 'Trade', href: PERT_ORIGIN + '/trade', isOutLink: false },
      { name: 'Vaults', href: PERT_ORIGIN + '/vaults', isOutLink: false },
    ],
  },
  {
    name: 'About',
    links: [
      { name: 'Docs', href: 'https://docs.dtx.trade', isOutLink: true },
      { name: 'Tutorials', href: 'https://docs.dtx.trade/docs/tutorials', isOutLink: true },
      {
        name: 'Terms of Use',
        href: 'https://docs.dtx.trade/docs/additional-information/terms-of-use',
        isOutLink: true,
      },
      {
        name: 'Privacy Policy',
        href: 'https://docs.dtx.trade/docs/additional-information/privacy-policy',
        isOutLink: true,
      },
    ],
  },
]

export default function Footer() {
  const [darkMode] = useDarkModeManager()

  return (
    <FooterContain>
      <FooterContext>
        <DomainBaseInfo>
          <Left>
            <Logo
              style={{ color: darkMode ? '#fff' : '#0152FF' }}
              fill={'#0152FF'}
              width={'64px'}
              height="100%"
              title="logo"
            />
            <Slogen>A Trading Eden for Degens.</Slogen>
          </Left>
          {/*  */}
          <Right>
            <Medias>
              {medias.map((item) => (
                <MediaLink href={item.href} target="_blank" rel="noopener noreferrer" key={item.href}>
                  <ReactSVG src={item.Icon} />
                </MediaLink>
              ))}
            </Medias>
            <GrayText>@{new Date().getFullYear()} DTX.trade</GrayText>
          </Right>
        </DomainBaseInfo>
        <PLinkGroup>
          {footerLinks.map((group, index) => (
            <div key={index}>
              <LinkTitle>{group.name}</LinkTitle>
              {group.links.map((link, index) => (
                <GrayText key={index}>
                  <OutLink href={link.href} target={link.isOutLink ? '_blank' : '_self'} rel="noopener noreferrer">
                    {link.name}
                  </OutLink>
                </GrayText>
              ))}
            </div>
          ))}
        </PLinkGroup>
      </FooterContext>
    </FooterContain>
  )
}
