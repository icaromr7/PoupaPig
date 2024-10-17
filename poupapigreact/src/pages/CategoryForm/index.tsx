import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Title,
  Content,
  InputDiv,
  IconDiv,
  TitleIconDiv,
  LineIcon,
  ButtonsDiv,
} from "./style";
import theme from "../../styles/theme";
import Input from "../../components/Input";

//icons importados:
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AodIcon from "@mui/icons-material/Aod";
import AppleIcon from "@mui/icons-material/Apple";
import AttractionsIcon from "@mui/icons-material/Attractions";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import CakeIcon from "@mui/icons-material/Cake";
import BuildIcon from "@mui/icons-material/Build";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CarRepairIcon from "@mui/icons-material/CarRepair";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import CastleIcon from "@mui/icons-material/Castle";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ChairIcon from "@mui/icons-material/Chair";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import ComputerIcon from "@mui/icons-material/Computer";
import CookieIcon from "@mui/icons-material/Cookie";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";

import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import DrawIcon from "@mui/icons-material/Draw";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import EmergencyIcon from "@mui/icons-material/Emergency";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import Face3Icon from "@mui/icons-material/Face3";
import Face6Icon from "@mui/icons-material/Face6";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FestivalIcon from "@mui/icons-material/Festival";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ForestIcon from "@mui/icons-material/Forest";
import GavelIcon from "@mui/icons-material/Gavel";
import GradeIcon from "@mui/icons-material/Grade";
import HardwareIcon from "@mui/icons-material/Hardware";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

import HeadsetIcon from "@mui/icons-material/Headset";
import HikingIcon from "@mui/icons-material/Hiking";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HttpsIcon from "@mui/icons-material/Https";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import InstagramIcon from "@mui/icons-material/Instagram";
import IronIcon from "@mui/icons-material/Iron";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LiquorIcon from "@mui/icons-material/Liquor";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LuggageIcon from "@mui/icons-material/Luggage";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PaletteIcon from "@mui/icons-material/Palette";
import PetsIcon from "@mui/icons-material/Pets";
import { Button } from "../../components/Button";

export function CategoryForm() {
  const navigate = useNavigate();

  const handleCancelForm = () => {
    navigate("/new-transaction");
  };

  const handleInputOutputList = () => {
    navigate("/category-list");
  };

  return (
    <Container>
      <Title>Lançamentos na conta</Title>
      <Content>
        <InputDiv>
          <Input name="nome" placeholder="Nome categoria" />
          <Input name="valorLimite" placeholder="Valor limite" />
          <Input name="valorMaximo" placeholder="Valor máximo" />
        </InputDiv>
        <IconDiv>
          <TitleIconDiv>Escolha um icon para a categoria:</TitleIconDiv>
          <LineIcon>
            <IcecreamIcon
              sx={{
                color: theme.colors.blue002,
                cursor: "pointer",
                "&:hover": {
                  border: `1px solid ${theme.colors.blue002}`,
                  borderRadius: "4px",
                },
              }}
            />
            <LocalBarIcon style={{ color: theme.colors.blue002 }} />
            <AirplanemodeActiveIcon style={{ color: theme.colors.blue002 }} />
            <AirportShuttleIcon style={{ color: theme.colors.blue002 }} />
            <AodIcon style={{ color: theme.colors.blue002 }} />
            <AppleIcon style={{ color: theme.colors.blue002 }} />
            <AttractionsIcon style={{ color: theme.colors.blue002 }} />
            <AutoStoriesIcon style={{ color: theme.colors.blue002 }} />
            <AutoGraphIcon style={{ color: theme.colors.blue002 }} />
            <BatchPredictionIcon style={{ color: theme.colors.blue002 }} />
            <BathtubIcon style={{ color: theme.colors.blue002 }} />
            <BeachAccessIcon style={{ color: theme.colors.blue002 }} />
            <BikeScooterIcon style={{ color: theme.colors.blue002 }} />
            <Brightness5Icon style={{ color: theme.colors.blue002 }} />
            <CakeIcon style={{ color: theme.colors.blue002 }} />
            <BuildIcon style={{ color: theme.colors.blue002 }} />
            <CameraAltIcon style={{ color: theme.colors.blue002 }} />
            <CarRepairIcon style={{ color: theme.colors.blue002 }} />
          </LineIcon>
          <LineIcon>
            <CardGiftcardIcon style={{ color: theme.colors.blue002 }} />
            <CardTravelIcon style={{ color: theme.colors.blue002 }} />
            <CastleIcon style={{ color: theme.colors.blue002 }} />
            <CelebrationIcon style={{ color: theme.colors.blue002 }} />
            <ChairIcon style={{ color: theme.colors.blue002 }} />
            <CheckroomIcon style={{ color: theme.colors.blue002 }} />
            <ChildCareIcon style={{ color: theme.colors.blue002 }} />
            <ChildFriendlyIcon style={{ color: theme.colors.blue002 }} />
            <CleanHandsIcon style={{ color: theme.colors.blue002 }} />
            <CleaningServicesIcon style={{ color: theme.colors.blue002 }} />
            <CoffeeIcon style={{ color: theme.colors.blue002 }} />
            <ColorLensIcon style={{ color: theme.colors.blue002 }} />
            <ComputerIcon style={{ color: theme.colors.blue002 }} />
            <CookieIcon style={{ color: theme.colors.blue002 }} />
            <CrisisAlertIcon style={{ color: theme.colors.blue002 }} />
            <DeliveryDiningIcon style={{ color: theme.colors.blue002 }} />
            <DeviceThermostatIcon style={{ color: theme.colors.blue002 }} />
            <DirectionsSubwayIcon style={{ color: theme.colors.blue002 }} />
          </LineIcon>
          <LineIcon>
            <DownhillSkiingIcon style={{ color: theme.colors.blue002 }} />
            <DrawIcon style={{ color: theme.colors.blue002 }} />
            <ElectricBoltIcon style={{ color: theme.colors.blue002 }} />
            <EmojiNatureIcon style={{ color: theme.colors.blue002 }} />
            <EmergencyIcon style={{ color: theme.colors.blue002 }} />
            <EmojiEmotionsIcon style={{ color: theme.colors.blue002 }} />
            <EnhancedEncryptionIcon style={{ color: theme.colors.blue002 }} />
            <Face3Icon style={{ color: theme.colors.blue002 }} />
            <Face6Icon style={{ color: theme.colors.blue002 }} />
            <FavoriteIcon style={{ color: theme.colors.blue002 }} />
            <FamilyRestroomIcon style={{ color: theme.colors.blue002 }} />
            <FestivalIcon style={{ color: theme.colors.blue002 }} />
            <FitnessCenterIcon style={{ color: theme.colors.blue002 }} />
            <ForestIcon style={{ color: theme.colors.blue002 }} />
            <GavelIcon style={{ color: theme.colors.blue002 }} />
            <GradeIcon style={{ color: theme.colors.blue002 }} />
            <HardwareIcon style={{ color: theme.colors.blue002 }} />
            <HealthAndSafetyIcon style={{ color: theme.colors.blue002 }} />
          </LineIcon>
          <LineIcon>
            <HeadsetIcon style={{ color: theme.colors.blue002 }} />
            <HikingIcon style={{ color: theme.colors.blue002 }} />
            <HomeWorkIcon style={{ color: theme.colors.blue002 }} />
            <HttpsIcon style={{ color: theme.colors.blue002 }} />
            <ImagesearchRollerIcon style={{ color: theme.colors.blue002 }} />
            <InstagramIcon style={{ color: theme.colors.blue002 }} />
            <IronIcon style={{ color: theme.colors.blue002 }} />
            <KitesurfingIcon style={{ color: theme.colors.blue002 }} />
            <LightModeIcon style={{ color: theme.colors.blue002 }} />
            <LightbulbIcon style={{ color: theme.colors.blue002 }} />
            <LiquorIcon style={{ color: theme.colors.blue002 }} />
            <LocalFloristIcon style={{ color: theme.colors.blue002 }} />
            <LocalGroceryStoreIcon style={{ color: theme.colors.blue002 }} />
            <LunchDiningIcon style={{ color: theme.colors.blue002 }} />
            <LuggageIcon style={{ color: theme.colors.blue002 }} />
            <MedicalServicesIcon style={{ color: theme.colors.blue002 }} />
            <PaletteIcon style={{ color: theme.colors.blue002 }} />
            <PetsIcon style={{ color: theme.colors.blue002 }} />
          </LineIcon>
        </IconDiv>
        <ButtonsDiv>
          <Button
            title="Cancelar"
            backgroundColor={theme.colors.greyB8C}
            borderColor={theme.colors.grey6F7}
            onClick={handleCancelForm}
          />
          <Button title="Salvar" onClick={handleInputOutputList} />
        </ButtonsDiv>
      </Content>
    </Container>
  );
}
