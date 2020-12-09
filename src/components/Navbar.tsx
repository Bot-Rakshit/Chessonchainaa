import React from "react";
import { styled, AppBar, Grid, Box, Link } from "@material-ui/core";

const AppBarBody = styled(Grid)({
  maxHeight: 70,
  maxWidth: '1400px',
  margin: 'auto',
  paddingTop: '20px',
  paddingBottom: '20px'
});

const Logo = styled("img")({
  width: 'auto',
  height: '20vw',
  maxHeight: '32px',
  marginLeft: '2vw'
});

const LinksContainer = styled(Grid)({
  marginRight: '2vw'
});

const LinkButton = styled(Link)({
  fontSize: '14px'
});

const LinkDivider = styled(Grid)({
  borderLeft: 'solid 1px white',
  width: '1px',
  marginRight: '10px',
  marginLeft: '10px'
});

export const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <AppBarBody container justify="space-between" alignItems='center'>
        <Grid item>
          <Box>
            <Logo src={process.env.PUBLIC_URL + "/logos/web3api.png"} alt="Web3 API Logo" />
          </Box>
        </Grid>
        <Grid item>
          <LinksContainer container wrap='nowrap'>
            <Grid item>
              <LinkButton href="https://web3api.substack.com/" target="_blank" color={'textSecondary'} variant='body1'>
                Blog
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://github.com/web3-api/prototype" target="_blank" color={'textSecondary'} variant='body1'>
                Code
              </LinkButton>
            </Grid>
            <LinkDivider item />
            <Grid item>
              <LinkButton href="https://airtable.com/shri2hEgu1BlMLXZ9" target="_blank" color={'textSecondary'} variant='body1'>
                Contact
              </LinkButton>
            </Grid>
          </LinksContainer>
        </Grid>
      </AppBarBody>
    </AppBar>
  );
};