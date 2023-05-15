import {
  Container,
  Typography,
  Box,
  Link,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Table,
  Card,
  CardContent,
} from '@material-ui/core';
import { graphql } from 'gatsby';
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ColorBlock from '../components/ColorBlock';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Section from '../components/Section';
import SiteContext from '../components/SiteContext';
import Skrim from '../components/Skrim/Skrim';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;

  p {
    margin-bottom: 12px;
  }
`;

const PrivacyVerklaring = ({ data }) => {
  const { setNavbarSettings, setFooterSettings } = useContext(SiteContext);

  useEffect(() => {
    setNavbarSettings({ scrolledColor: 'primary', textColor: 'light' });
    setFooterSettings({ color: 'info' });

    return () => {
      setFooterSettings({ color: 'secondary' });
    };
  }, []);
  return (
    <>
      <ColorBlock
        backgroundColor="green"
        maxWidth="lg"
        id="privacy-banner"
        minHeight="50vh"
        fullHeight={false}
        style={{ color: '#fff', minHeight: '50vh' }}
      >
        <Skrim />
        <Section>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            style={{ wordBreak: 'break-word' }}
          >
            Privacy verklaring
          </Typography>
        </Section>
      </ColorBlock>
      <Container>
        <Wrapper>
          <Typography variant="h4" component="h2" style={{ marginBottom: 16, marginTop: 32 }}>
            Privacy- & cookieverklaring LEF Groningen
          </Typography>
          <Typography style={{ marginBottom: 16, fontWeight: 700 }}>
            Laatst aangepast op 18-10-2022
          </Typography>
          <Typography>
            Deze privacy- en cookieverklaring is gecontroleerd en gecertificeerd door Privacy
            Verified B.V. in samenwerking met Stichting Certificering. Hieronder vindt u een
            samenvatting van de belangrijkste punten van de verklaring, maar ook de volledige
            details.
          </Typography>
          <Box
            component="a"
            href="https://www.privacyverified.nl/directory-listing/lef-groningen/"
            display="block"
            maxWidth={800}
            my={2}
          >
            <PreviewCompatibleImage imageInfo={data?.file} />
          </Box>
          <Typography variant="h4" component="h2" style={{ marginTop: 12, marginBottom: 16 }}>
            Wie zijn wij
          </Typography>
          <Typography>
            Wij zijn LEF, een onderneming die gespecialiseerd is in innovatietrajecten en
            doelgroep-onderzoek. Bij het verwerken van jouw gegevens, is onze juridische rol de rol
            van{' '}
            <Link
              underline="always"
              href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rules-business-and-organisations/obligations/controller-processor/what-data-controller-or-data-processor_nl"
            >
              <strong>verwerkingsverantwoordelijke</strong>
            </Link>
            .
          </Typography>
          <Typography>
            Voor vragen over deze privacy- en cookieverklaring, kun je contact opnemen met Thijs de
            Vries, via het e-mailadres{' '}
            <Link underline="always" href="mailto:thijs@lefgroningen.nl">
              thijs@lefgroningen.nl
            </Link>
            .
          </Typography>
          <Typography>
            <strong>Onze contactgegevens zijn:</strong>
          </Typography>
          <Typography>
            LEF Groningen
            <br />
            Bornholmstraat 46
            <br />
            9723AZ Groningen
            <br />
            KvK: 76775291
          </Typography>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Typography variant="h5" component="h3">
              Welke gegevens verzamelen wij
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mt={0.25}
              mr={1}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image003.png"
              alt="contact gegevens icoon"
            />
            <Typography>
              <strong>Contactgegevens: </strong>
              gegevens om contact met jou op te nemen.
              <br />
              <small>Bijv. naam, e-mailadres en telefoonnummer.</small>
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mt={0.25}
              mr={1}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image005.png"
              alt=""
            />
            <Typography>
              <strong>Financiële gegevens: </strong>
              gegevens die de betaling van een digitale factuur voor een dienst mogelijk maken.
              <br />
              <small>Daarvoor verwerken wij jouw naam en bankrekeningnummer.</small>
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mt={0.25}
              mr={1}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image007.png"
              alt=""
            />
            <Typography>
              <strong>Klik- en gedragsgegevens: </strong>
              gegevens over hoe onze website door jou gebruikt wordt.
              <br />
              <small>
                Daarbij verwerken we de bezochte pagina’s, de duur van bezoek, het klikgedrag,
                cookies en andere analytische data.
              </small>
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mt={0.25}
              mr={1}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image009.png"
            />
            <Typography>
              <strong>Profileringsgegevens: </strong>
              gegevens die worden verwerkt om de doelgroep van onze klant in kaart te brengen en/of
              onze klant van afgestemd advies en/of oplossingen te voorzien.
              <br />
              <small>
                We verwerken de volgende persoonsgegevens: productvoorkeuren, interesses,
                leeftijdscategorie en doelgroep.
              </small>
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mt={0.25}
              mr={1}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image010.png"
            />
            <Typography>
              <strong>Door gebruikers gegenereerde inhoud: </strong>
              gegevens die je tijdens het gebruik van onze dienst aanmaakt of wanneer je contact met
              ons opneemt.
              <br />
              <small>
                Wij verwerken gegevens die je invult op het contactformulier op onze website of die
                je aan ons stuurt als je contact met ons opneemt.
              </small>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Box
              component="img"
              mr={1}
              border="0"
              width="30px"
              height="30px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image011.png"
            />
            <Typography variant="h5" component="h3">
              Gegevens die wij nooit verzamelen
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mt={0.25}
              mr={1}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image013.png"
            />
            <Typography>
              <strong>Gegevens van kinderen: </strong>
              gegevens van, of over, kinderen onder de 16 jaar.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Box
              component="img"
              mr={1}
              border="0"
              width="30px"
              height="30px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image014.png"
            />
            <Typography variant="h5" component="h3">
              Hoe en waarom wij gegevens verzamelen
            </Typography>
          </Box>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Doel</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <strong>Categorieën gegevens</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <strong>Juridische grondslag</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <strong>Hoe lang we het bewaren</strong>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Beheren van onze website</strong>
                      <br />
                      Wanneer je onze website bezoekt, verzamelen wij technische informatie en
                      informatie over hoe jij onze website gebruikt.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>
                        Klik- en gedragsgegevens<strong></strong>
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Jouw toestemming</li>
                    </ul>
                    <Typography>
                      <strong> </strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2 jaren</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Afhandelen van contactverzoeken</strong>
                      <br />
                      Wanneer je contact met ons opneemt via e-mail, ons contactformulier etc., geef
                      je ons informatie over jezelf en jouw vraag.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                      <li>Door gebruikers gegenereerde inhoud</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Uitvoering van de overeenkomst</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>2 jaren</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Betaling voor een dienst</strong>
                    </Typography>
                    <Typography>
                      Wanneer je een dienst betaalt, geef je ons informatie om de betaling te
                      verwerken.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                      <li>Financiële gegevens</li>
                    </ul>
                    <Typography>
                      <strong> </strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Uitvoering van de overeenkomst</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>7 jaren</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Verbeteren van onze diensten</strong>
                    </Typography>
                    <Typography>
                      Wij gebruiken verschillende gegevens om continu onze diensten te verbeteren en
                      jou de beste ervaring waar mogelijk te kunnen bieden. Indien mogelijk,
                      gebruiken wij volledig geaggregeerde data, maar in bepaalde gevallen zijn
                      persoonsgegevens noodzakelijk.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Klik- en gedragsgegevens</li>
                      <li>Door gebruikers gegenereerde inhoud</li>
                      <li>Profileringsgegevens</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Ons gerechtvaardigd belang</li>
                      <li>Uitvoering van de overeenkomst</li>
                      <li>Jouw toestemming</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>2 jaren</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Uitvoeren van het doelgroepenonderzoek</strong>
                    </Typography>
                    <Typography>
                      Voor het organiseren en optimaliseren van de focusgroep en co creatie.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                      <li>Profileringsgegevens</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Jouw toestemming</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>6 maanden</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Uitvoeren van het innovatietraject en de implementatie</strong>
                    </Typography>
                    <Typography>Voor het oplossen van het vraagstuk.</Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Uitvoering van de overeenkomst</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>2 jaren</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Box
              component="img"
              mr={1}
              style={{ objectFit: 'contain' }}
              border="0"
              width="30px"
              height="30px"
              src="/img/privacy-statement/image016.png"
            />
            <Typography variant="h5" component="h3">
              Hoe houden we jouw gegevens veilig?
            </Typography>
          </Box>
          <Typography>
            Wij doen er alles aan om jouw gegevens veilig te houden. Wij nemen, bijvoorbeeld, de
            volgende maatregelen:
          </Typography>
          <ul>
            <li>
              <strong>Encryptie:</strong> gegevens zijn extra beveiligd tijdens verzending en
              opslag.
              <br />
              <br />
            </li>
            <li>
              <strong>Twee-factor authenticatie:</strong> toegang tot gegevens is enkel mogelijk na
              een dubbele authenticatie.
              <br />
              <br />
            </li>
            <li>
              <strong>Strikte autorisaties:</strong> enkel de hiertoe bevoegde personen hebben
              toegang tot de gegevens en mogen deze verwerken.
              <br />
              <br />
            </li>
            <li>
              <strong>Logging:</strong> wij houden bij wie en wanneer er toegang tot de gegevens
              heeft gehad.
            </li>
          </ul>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Box
              component="img"
              mr={1}
              style={{ objectFit: 'contain' }}
              border="0"
              width="30px"
              height="30px"
              src="/img/privacy-statement/image017.png"
            />
            <Typography variant="h5" component="h3">
              Jouw privacy rechten
            </Typography>
          </Box>
          <Card style={{ marginTop: 32, marginBottom: 32 }}>
            <CardContent>
              <Typography>
                <strong>Wil jij een van jouw rechten uitoefenen?</strong>
              </Typography>
              <Typography>
                Neem dan contact met ons op via:{' '}
                <Link underline="always" href="mailto:info@lefgroningen.nl">
                  info@lefgroningen.nl
                </Link>
                . Let op dat je duidelijk aangeeft wie je bent, zodat we zeker weten dat wij geen
                gegevens van de verkeerde persoon aanpassen of verwijderen. We zullen in principe
                binnen een maand aan jouw verzoek voldoen. Als wij deze termijn verlengen, zullen
                wij je daarvan tijdig op de hoogte stellen.
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              border="0"
              width="20px"
              height="20px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image018.png"
            />
            <Typography>
              <strong>Recht op inzage: </strong>
              je hebt het recht op inzage in de persoonsgegevens die wij van jou verwerken.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image020.png"
            />
            <Typography>
              <strong>Recht op rectificatie: </strong>
              je hebt het recht om onjuiste of onvolledige persoonsgegevens die wij van jou
              verwerken te corrigeren.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image022.png"
            />
            <Typography>
              <strong>Recht op verwijdering: </strong>
              je hebt het recht om jouw persoonsgegevens te laten verwijderen.
            </Typography>
          </Box>

          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image024.png"
            />
            <Typography>
              <strong>Recht op beperking van verwerking: </strong>
              in sommige gevallen heb je het recht ons te verzoeken de verwerking van jouw
              persoonsgegevens (al dan niet tijdelijk) te beperken. Dit betekent dat wij minder
              persoonsgegevens van jou zullen verwerken.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image026.png"
            />
            <Typography>
              <strong>Recht van bezwaar: </strong>
              je hebt het recht om bezwaar te maken tegen de persoonsgegevens die wij van jou
              verwerken.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              style={{ objectFit: 'contain' }}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image028.png"
            />
            <Typography>
              <strong>Recht om toestemming in te trekken: </strong>
              je kunt eenvoudig jouw gegeven toestemming voor bepaalde verwerkingen weer intrekken.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              style={{ objectFit: 'contain' }}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image030.png"
            />
            <Typography>
              <strong>Recht op dataportabiliteit: </strong>
              je hebt het recht om een kopie van jouw gegevens op te vragen zodat je deze mee kunt
              nemen naar een andere dienstverlener. Als je dit aan ons vraagt, en het technisch
              gezien mogelijk is, zullen we de gegevens rechtstreeks naar de andere dienst
              doorsturen.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              mr={1}
              mt={0.25}
              style={{ objectFit: 'contain' }}
              border="0"
              width="20px"
              height="20px"
              src="/img/privacy-statement/image032.png"
            />
            <Typography>
              <strong> Recht om een klacht in te dienen bij de toezichthouder: </strong>
              als je niet tevreden bent met de manier waarop jouw persoonsgegevens worden verwerkt,
              laat het ons dan vooral eerst weten, zodat wij de kans hebben om jouw zorgen weg te
              nemen. Als dit niet ons lukt, of wanneer je dit niet wilt, heb je altijd het recht om
              contact op te nemen met de Autoriteit Persoonsgegevens om een klacht in te dienen.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Box
              component="img"
              mr={1}
              border="0"
              width="30px"
              height="30px"
              style={{ objectFit: 'contain' }}
              src="/img/privacy-statement/image033.png"
            />
            <Typography variant="h5" component="h3">
              Derde partijen die ook jouw gegevens verwerken
            </Typography>
          </Box>
          <Typography>
            Om de hierboven beschreven doeleinden te bereiken, delen wij uw persoonsgegevens met
            andere bedrijven of instellingen. Wij hebben met deze partijen een
            verwerkersovereenkomst gesloten om ervoor te zorgen dat zij jouw gegevens verwerken in
            overeenstemming met deze privacy- en cookieverklaring.
          </Typography>
          <Typography>
            Wanneer persoonsgegevens worden doorgegeven aan een derde partij{' '}
            <strong>buiten de EU</strong>, nemen wij stappen om ervoor te zorgen dat wij de vereiste{' '}
            <Link
              underline="always"
              href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_nl"
            >
              standaard contractuele clausules
            </Link>{' '}
            met hen overeenkomen.
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Dienstverlener</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Categorieën gegevens
                      <br />
                      verzameld / gedeeld
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Doel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Plaats van verwerking</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Google LLC</strong>
                    </Typography>
                    <Typography>
                      <Link underline="always" href="https://policies.google.com/privacy?hl=nl">
                        Privacyverklaring
                      </Link>
                      <strong></strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                      <li>Financiële gegevens</li>
                      <li>Door gebruikers gegenereerde inhoud</li>
                      <li>Profileringsgegevens</li>
                      <li>Klik- en gedragsgegevens</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>Opslag van (persoons) gegevens</Typography>
                    <Typography>Managen van de website</Typography>
                    <Typography>Verbeteren online services</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>EU en US</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Hubspot Inc.</strong>
                    </Typography>
                    <Typography>
                      <Link underline="always" href="https://legal.hubspot.com/privacy-policy">
                        Privacyverklaring
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                      <li>Door gebruikers gegenereerde inhoud</li>
                      <li>Financiële gegevens</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>Managen van de klantrelatie</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>EU en US</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>TransIP B.V.</strong>
                    </Typography>
                    <Typography>
                      <Link
                        underline="always"
                        href="https://www.transip.eu/legal-and-security/privacy-policy/#:~:text=TransIP%20handles%20your%20data%20carefully,described%20in%20this%20privacy%20statement."
                      >
                        Privacyverklaring
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <ul>
                      <li>Contactgegevens</li>
                      <li>Klik- en gedraggegevens</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Zorgen voor een goed functionerende website met contactmogelijkheden.
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>EU</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Card style={{ marginTop: 32, marginBottom: 32 }}>
            <CardContent>
              <Typography>
                Soms moeten wij ook gegevens delen omdat wij hiertoe{' '}
                <strong>wettelijk verplicht zijn</strong> (bijvoorbeeld, als de politie informatie
                vordert vanwege een strafbaar feit).
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" alignItems="center" mb={2} mt={4}>
            <Box
              component="img"
              mr={1}
              style={{ objectFit: 'contain' }}
              border="0"
              width="30px"
              height="30px"
              src="/img/privacy-statement/image034.png"
            />
            <Typography variant="h5" component="h3">
              Hoe wij cookies gebruiken
            </Typography>
          </Box>
          <Typography>
            Op onze website gebruiken wij (en derde partijen) 2 soorten cookies:
          </Typography>
          <ul>
            <li>
              <strong>Functionele cookies: </strong>
              noodzakelijke cookies die het mogelijk maken onze website efficiënt te gebruiken. Wij{' '}
              <u>hebben geen toestemming van jou nodig</u> voor deze cookies.
            </li>
            <li>
              <strong>Analytische cookies: </strong>
              cookies die analyseren hoe onze website door bezoekers wordt gebruikt. Wij{' '}
              <u>moeten in bepaalde gevallen jouw toestemming vragen</u> voor deze cookies.
            </li>
          </ul>
          <Card>
            <CardContent style={{ display: 'grid', gridTemplateColumns: '24px auto', gap: 16 }}>
              <Box
                component="img"
                mr={1}
                style={{ objectFit: 'contain' }}
                border="0"
                width="30px"
                height="30px"
                src="/img/privacy-statement/image036.png"
              />
              <div>
                <Typography>
                  Je kunt het plaatsen van <strong>analytische </strong>
                  cookies accepteren of weigeren middels onze <strong>cookiebanner</strong>.
                </Typography>
                <Typography>
                  Je kunt ook altijd <strong>jouw toestemming </strong>weer intrekken.
                </Typography>
              </div>
            </CardContent>
          </Card>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Organisatie</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Naam cookie</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Type cookie</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Doel</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Hoe lang wij het bewaren</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>
                      <strong>Google Inc.</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <strong>_ga (Google Analytics)</strong>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Analytisch</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      Het analyseren op optimaliseren van het gebruik van onze website
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>2 jaar</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" alignItems="center" mt={5} mb={2}>
            <Box
              component="img"
              mr={1}
              style={{ objectFit: 'contain' }}
              border="0"
              width="30px"
              height="30px"
              src="/img/privacy-statement/image038.png"
            />
            <Typography variant="h5" component="h3">
              Wijzigen van deze verklaring
            </Typography>
          </Box>
          <Typography>
            Wij hebben <strong>het recht wijzigingen door te voeren </strong>op deze privacy- en
            cookieverklaring.
          </Typography>
          <Typography>
            De laatste versie van deze verklaring is altijd beschikbaar op onze website (en wij
            zullen jou vooraf via e-mail op hoogte brengen indien er belangrijke wijzigingen worden
            doorgevoerd).
          </Typography>
        </Wrapper>
      </Container>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "privacy-verklaring-certificaat.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

PrivacyVerklaring.propTypes = {
  data: PropTypes.object,
};

PrivacyVerklaring.defaultProps = {
  data: {},
};

export default PrivacyVerklaring;
