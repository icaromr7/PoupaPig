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
import StyledIcon from "../../components/StyledIcon";

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
            <StyledIcon IconComponent={IcecreamIcon} />
            <StyledIcon IconComponent={LocalBarIcon} />
            <StyledIcon IconComponent={AirplanemodeActiveIcon} />
            <StyledIcon IconComponent={AirportShuttleIcon} />
            <StyledIcon IconComponent={AodIcon} />
            <StyledIcon IconComponent={AppleIcon} />
            <StyledIcon IconComponent={AttractionsIcon} />
            <StyledIcon IconComponent={AutoStoriesIcon} />
            <StyledIcon IconComponent={AutoGraphIcon} />
            <StyledIcon IconComponent={BatchPredictionIcon} />
            <StyledIcon IconComponent={BathtubIcon} />
            <StyledIcon IconComponent={BeachAccessIcon} />
            <StyledIcon IconComponent={BikeScooterIcon} />
            <StyledIcon IconComponent={Brightness5Icon} />
            <StyledIcon IconComponent={CakeIcon} />
            <StyledIcon IconComponent={BuildIcon} />
            <StyledIcon IconComponent={CameraAltIcon} />
            <StyledIcon IconComponent={CarRepairIcon} />
          </LineIcon>
          <LineIcon>
            <StyledIcon IconComponent={CardGiftcardIcon} />
            <StyledIcon IconComponent={CardTravelIcon} />
            <StyledIcon IconComponent={CastleIcon} />
            <StyledIcon IconComponent={CelebrationIcon} />
            <StyledIcon IconComponent={ChairIcon} />
            <StyledIcon IconComponent={CheckroomIcon} />
            <StyledIcon IconComponent={ChildCareIcon} />
            <StyledIcon IconComponent={ChildFriendlyIcon} />
            <StyledIcon IconComponent={CleanHandsIcon} />
            <StyledIcon IconComponent={CleaningServicesIcon} />
            <StyledIcon IconComponent={CoffeeIcon} />
            <StyledIcon IconComponent={ColorLensIcon} />
            <StyledIcon IconComponent={ComputerIcon} />
            <StyledIcon IconComponent={CookieIcon} />
            <StyledIcon IconComponent={CrisisAlertIcon} />
            <StyledIcon IconComponent={DeliveryDiningIcon} />
            <StyledIcon IconComponent={DeviceThermostatIcon} />
            <StyledIcon IconComponent={DirectionsSubwayIcon} />
          </LineIcon>
          <LineIcon>
            <StyledIcon IconComponent={DownhillSkiingIcon} />
            <StyledIcon IconComponent={DrawIcon} />
            <StyledIcon IconComponent={ElectricBoltIcon} />
            <StyledIcon IconComponent={EmojiNatureIcon} />
            <StyledIcon IconComponent={EmergencyIcon} />
            <StyledIcon IconComponent={EmojiEmotionsIcon} />
            <StyledIcon IconComponent={EnhancedEncryptionIcon} />
            <StyledIcon IconComponent={Face3Icon} />
            <StyledIcon IconComponent={Face6Icon} />
            <StyledIcon IconComponent={FavoriteIcon} />
            <StyledIcon IconComponent={FamilyRestroomIcon} />
            <StyledIcon IconComponent={FestivalIcon} />
            <StyledIcon IconComponent={FitnessCenterIcon} />
            <StyledIcon IconComponent={ForestIcon} />
            <StyledIcon IconComponent={GavelIcon} />
            <StyledIcon IconComponent={GradeIcon} />
            <StyledIcon IconComponent={HardwareIcon} />
            <StyledIcon IconComponent={HealthAndSafetyIcon} />
          </LineIcon>
          <LineIcon>
            <StyledIcon IconComponent={HeadsetIcon} />
            <StyledIcon IconComponent={HikingIcon} />
            <StyledIcon IconComponent={HomeWorkIcon} />
            <StyledIcon IconComponent={HttpsIcon} />
            <StyledIcon IconComponent={ImagesearchRollerIcon} />
            <StyledIcon IconComponent={InstagramIcon} />
            <StyledIcon IconComponent={IronIcon} />
            <StyledIcon IconComponent={KitesurfingIcon} />
            <StyledIcon IconComponent={LightModeIcon} />
            <StyledIcon IconComponent={LightbulbIcon} />
            <StyledIcon IconComponent={LiquorIcon} />
            <StyledIcon IconComponent={LocalFloristIcon} />
            <StyledIcon IconComponent={LocalGroceryStoreIcon} />
            <StyledIcon IconComponent={LunchDiningIcon} />
            <StyledIcon IconComponent={LuggageIcon} />
            <StyledIcon IconComponent={MedicalServicesIcon} />
            <StyledIcon IconComponent={PaletteIcon} />
            <StyledIcon IconComponent={PetsIcon} />
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
