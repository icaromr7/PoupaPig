import React, { useState } from "react";
import * as MuiIcons from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import PoupaPigIcon from "../assets/svg/iconepig.svg";

import StyledIcon from "../components/StyledIcon";

import {
  Icecream,
  LocalBar,
  AirplanemodeActive,
  AirportShuttle,
  Aod,
  Apple,
  Attractions,
  AutoStories,
  AutoGraph,
  BatchPrediction,
  Bathtub,
  BeachAccess,
  BikeScooter,
  Brightness5,
  Cake,
  Build,
  CameraAlt,
  CarRepair,
  CardGiftcard,
  CardTravel,
  Castle,
  Celebration,
  Chair,
  Checkroom,
  ChildCare,
  ChildFriendly,
  CleanHands,
  CleaningServices,
  Coffee,
  ColorLens,
  Computer,
  Cookie,
  CrisisAlert,
  DeliveryDining,
  DeviceThermostat,
  DirectionsSubway,
  DownhillSkiing,
  Draw,
  ElectricBolt,
  EmojiNature,
  Emergency,
  EmojiEmotions,
  EnhancedEncryption,
  Face3,
  Face6,
  Favorite,
  FamilyRestroom,
  Festival,
  FitnessCenter,
  Forest,
  Gavel,
  Grade,
  Hardware,
  HealthAndSafety,
  Headset,
  Hiking,
  HomeWork,
  Https,
  ImagesearchRoller,
  Instagram,
  Iron,
  Kitesurfing,
  LightMode,
  Lightbulb,
  Liquor,
  LocalFlorist,
  LocalGroceryStore,
  LunchDining,
  Luggage,
  MedicalServices,
  Palette,
  Pets,
} from "@mui/icons-material";

const iconMapping: Record<
  string,
  OverridableComponent<SvgIconTypeMap<{}, "svg">>
> = {
  IcecreamIcon: Icecream,
  LocalBarIcon: LocalBar,
  AirplanemodeActiveIcon: AirplanemodeActive,
  AirportShuttleIcon: AirportShuttle,
  AodIcon: Aod,
  AppleIcon: Apple,
  AttractionsIcon: Attractions,
  AutoStoriesIcon: AutoStories,
  AutoGraphIcon: AutoGraph,
  BatchPredictionIcon: BatchPrediction,
  BathtubIcon: Bathtub,
  BeachAccessIcon: BeachAccess,
  BikeScooterIcon: BikeScooter,
  Brightness5Icon: Brightness5,
  CakeIcon: Cake,
  BuildIcon: Build,
  CameraAltIcon: CameraAlt,
  CarRepairIcon: CarRepair,
  CardGiftcardIcon: CardGiftcard,
  CardTravelIcon: CardTravel,
  CastleIcon: Castle,
  CelebrationIcon: Celebration,
  ChairIcon: Chair,
  CheckroomIcon: Checkroom,
  ChildCareIcon: ChildCare,
  ChildFriendlyIcon: ChildFriendly,
  CleanHandsIcon: CleanHands,
  CleaningServicesIcon: CleaningServices,
  CoffeeIcon: Coffee,
  ColorLensIcon: ColorLens,
  ComputerIcon: Computer,
  CookieIcon: Cookie,
  CrisisAlertIcon: CrisisAlert,
  DeliveryDiningIcon: DeliveryDining,
  DeviceThermostatIcon: DeviceThermostat,
  DirectionsSubwayIcon: DirectionsSubway,
  DownhillSkiingIcon: DownhillSkiing,
  DrawIcon: Draw,
  ElectricBoltIcon: ElectricBolt,
  EmojiNatureIcon: EmojiNature,
  EmergencyIcon: Emergency,
  EmojiEmotionsIcon: EmojiEmotions,
  EnhancedEncryptionIcon: EnhancedEncryption,
  Face3Icon: Face3,
  Face6Icon: Face6,
  FavoriteIcon: Favorite,
  FamilyRestroomIcon: FamilyRestroom,
  FestivalIcon: Festival,
  FitnessCenterIcon: FitnessCenter,
  ForestIcon: Forest,
  GavelIcon: Gavel,
  GradeIcon: Grade,
  HardwareIcon: Hardware,
  HealthAndSafetyIcon: HealthAndSafety,
  HeadsetIcon: Headset,
  HikingIcon: Hiking,
  HomeWorkIcon: HomeWork,
  HttpsIcon: Https,
  ImagesearchRollerIcon: ImagesearchRoller,
  InstagramIcon: Instagram,
  IronIcon: Iron,
  KitesurfingIcon: Kitesurfing,
  LightModeIcon: LightMode,
  LightbulbIcon: Lightbulb,
  LiquorIcon: Liquor,
  LocalFloristIcon: LocalFlorist,
  LocalGroceryStoreIcon: LocalGroceryStore,
  LunchDiningIcon: LunchDining,
  LuggageIcon: Luggage,
  MedicalServicesIcon: MedicalServices,
  PaletteIcon: Palette,
  PetsIcon: Pets,
};

//importação de icons:

export const IconPicker = ({
  onSelect,
}: {
  onSelect: (iconName: string) => void;
}) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
    if (onSelect) {
      onSelect(iconName);
    }
  };
  const iconsList = (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: window.innerWidth < 800 ? "wrap" : "nowrap",
          maxWidth: window.innerWidth < 800 ? "250px" : "100%",
        }}
      >
        <StyledIcon
          IconComponent={Icecream}
          isSelected={selectedIcon === "IcecreamIcon"}
          onClick={() => handleIconClick("IcecreamIcon")}
        />
        <StyledIcon
          IconComponent={LocalBar}
          isSelected={selectedIcon === "LocalBarIcon"}
          onClick={() => handleIconClick("LocalBarIcon")}
        />
        <StyledIcon
          IconComponent={AirplanemodeActive}
          isSelected={selectedIcon === "AirplanemodeActiveIcon"}
          onClick={() => handleIconClick("AirplanemodeActiveIcon")}
        />
        <StyledIcon
          IconComponent={AirportShuttle}
          isSelected={selectedIcon === "AirportShuttleIcon"}
          onClick={() => handleIconClick("AirportShuttleIcon")}
        />
        <StyledIcon
          IconComponent={Aod}
          isSelected={selectedIcon === "AodIcon"}
          onClick={() => handleIconClick("AodIcon")}
        />
        <StyledIcon
          IconComponent={Apple}
          isSelected={selectedIcon === "AppleIcon"}
          onClick={() => handleIconClick("AppleIcon")}
        />
        <StyledIcon
          IconComponent={Attractions}
          isSelected={selectedIcon === "AttractionsIcon"}
          onClick={() => handleIconClick("AttractionsIcon")}
        />
        <StyledIcon
          IconComponent={AutoStories}
          isSelected={selectedIcon === "AutoStoriesIcon"}
          onClick={() => handleIconClick("AutoStoriesIcon")}
        />
        <StyledIcon
          IconComponent={AutoGraph}
          isSelected={selectedIcon === "AutoGraphIcon"}
          onClick={() => handleIconClick("AutoGraphIcon")}
        />
        <StyledIcon
          IconComponent={BatchPrediction}
          isSelected={selectedIcon === "BatchPredictionIcon"}
          onClick={() => handleIconClick("BatchPredictionIcon")}
        />
        <StyledIcon
          IconComponent={Bathtub}
          isSelected={selectedIcon === "BathtubIcon"}
          onClick={() => handleIconClick("BathtubIcon")}
        />
        <StyledIcon
          IconComponent={BeachAccess}
          isSelected={selectedIcon === "BeachAccessIcon"}
          onClick={() => handleIconClick("BeachAccessIcon")}
        />
        <StyledIcon
          IconComponent={BikeScooter}
          isSelected={selectedIcon === "BikeScooterIcon"}
          onClick={() => handleIconClick("BikeScooterIcon")}
        />
        <StyledIcon
          IconComponent={Brightness5}
          isSelected={selectedIcon === "Brightness5Icon"}
          onClick={() => handleIconClick("Brightness5Icon")}
        />
        <StyledIcon
          IconComponent={Cake}
          isSelected={selectedIcon === "CakeIcon"}
          onClick={() => handleIconClick("CakeIcon")}
        />
        <StyledIcon
          IconComponent={Build}
          isSelected={selectedIcon === "BuildIcon"}
          onClick={() => handleIconClick("BuildIcon")}
        />
        <StyledIcon
          IconComponent={CameraAlt}
          isSelected={selectedIcon === "CameraAltIcon"}
          onClick={() => handleIconClick("CameraAltIcon")}
        />
        <StyledIcon
          IconComponent={CarRepair}
          isSelected={selectedIcon === "CarRepairIcon"}
          onClick={() => handleIconClick("CarRepairIcon")}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: window.innerWidth < 800 ? "wrap" : "nowrap",
          maxWidth: window.innerWidth < 800 ? "250px" : "100%",
        }}
      >
        <StyledIcon
          IconComponent={CardGiftcard}
          isSelected={selectedIcon === "CardGiftcardIcon"}
          onClick={() => handleIconClick("CardGiftcardIcon")}
        />
        <StyledIcon
          IconComponent={CardTravel}
          isSelected={selectedIcon === "CardTravelIcon"}
          onClick={() => handleIconClick("CardTravelIcon")}
        />
        <StyledIcon
          IconComponent={Castle}
          isSelected={selectedIcon === "CastleIcon"}
          onClick={() => handleIconClick("CastleIcon")}
        />
        <StyledIcon
          IconComponent={Celebration}
          isSelected={selectedIcon === "CelebrationIcon"}
          onClick={() => handleIconClick("CelebrationIcon")}
        />
        <StyledIcon
          IconComponent={Chair}
          isSelected={selectedIcon === "ChairIcon"}
          onClick={() => handleIconClick("ChairIcon")}
        />
        <StyledIcon
          IconComponent={Checkroom}
          isSelected={selectedIcon === "CheckroomIcon"}
          onClick={() => handleIconClick("CheckroomIcon")}
        />
        <StyledIcon
          IconComponent={ChildCare}
          isSelected={selectedIcon === "ChildCareIcon"}
          onClick={() => handleIconClick("ChildCareIcon")}
        />
        <StyledIcon
          IconComponent={ChildFriendly}
          isSelected={selectedIcon === "ChildFriendlyIcon"}
          onClick={() => handleIconClick("ChildFriendlyIcon")}
        />
        <StyledIcon
          IconComponent={CleanHands}
          isSelected={selectedIcon === "CleanHandsIcon"}
          onClick={() => handleIconClick("CleanHandsIcon")}
        />
        <StyledIcon
          IconComponent={CleaningServices}
          isSelected={selectedIcon === "CleaningServicesIcon"}
          onClick={() => handleIconClick("CleaningServicesIcon")}
        />
        <StyledIcon
          IconComponent={Coffee}
          isSelected={selectedIcon === "CoffeeIcon"}
          onClick={() => handleIconClick("CoffeeIcon")}
        />
        <StyledIcon
          IconComponent={ColorLens}
          isSelected={selectedIcon === "ColorLensIcon"}
          onClick={() => handleIconClick("ColorLensIcon")}
        />
        <StyledIcon
          IconComponent={Computer}
          isSelected={selectedIcon === "ComputerIcon"}
          onClick={() => handleIconClick("ComputerIcon")}
        />
        <StyledIcon
          IconComponent={Cookie}
          isSelected={selectedIcon === "CookieIcon"}
          onClick={() => handleIconClick("CookieIcon")}
        />
        <StyledIcon
          IconComponent={CrisisAlert}
          isSelected={selectedIcon === "CrisisAlertIcon"}
          onClick={() => handleIconClick("CrisisAlertIcon")}
        />
        <StyledIcon
          IconComponent={DeliveryDining}
          isSelected={selectedIcon === "DeliveryDiningIcon"}
          onClick={() => handleIconClick("DeliveryDiningIcon")}
        />
        <StyledIcon
          IconComponent={DeviceThermostat}
          isSelected={selectedIcon === "DeviceThermostatIcon"}
          onClick={() => handleIconClick("DeviceThermostatIcon")}
        />
        <StyledIcon
          IconComponent={DirectionsSubway}
          isSelected={selectedIcon === "DirectionsSubwayIcon"}
          onClick={() => handleIconClick("DirectionsSubwayIcon")}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: window.innerWidth < 800 ? "wrap" : "nowrap",
          maxWidth: window.innerWidth < 800 ? "250px" : "100%",
        }}
      >
        <StyledIcon
          IconComponent={DownhillSkiing}
          isSelected={selectedIcon === "DownhillSkiingIcon"}
          onClick={() => handleIconClick("DownhillSkiingIcon")}
        />
        <StyledIcon
          IconComponent={Draw}
          isSelected={selectedIcon === "DrawIcon"}
          onClick={() => handleIconClick("DrawIcon")}
        />
        <StyledIcon
          IconComponent={ElectricBolt}
          isSelected={selectedIcon === "ElectricBoltIcon"}
          onClick={() => handleIconClick("ElectricBoltIcon")}
        />
        <StyledIcon
          IconComponent={EmojiNature}
          isSelected={selectedIcon === "EmojiNatureIcon"}
          onClick={() => handleIconClick("EmojiNatureIcon")}
        />
        <StyledIcon
          IconComponent={Emergency}
          isSelected={selectedIcon === "EmergencyIcon"}
          onClick={() => handleIconClick("EmergencyIcon")}
        />
        <StyledIcon
          IconComponent={EmojiEmotions}
          isSelected={selectedIcon === "EmojiEmotionsIcon"}
          onClick={() => handleIconClick("EmojiEmotionsIcon")}
        />
        <StyledIcon
          IconComponent={EnhancedEncryption}
          isSelected={selectedIcon === "EnhancedEncryptionIcon"}
          onClick={() => handleIconClick("EnhancedEncryptionIcon")}
        />
        <StyledIcon
          IconComponent={Face3}
          isSelected={selectedIcon === "Face3Icon"}
          onClick={() => handleIconClick("Face3Icon")}
        />
        <StyledIcon
          IconComponent={Face6}
          isSelected={selectedIcon === "Face6Icon"}
          onClick={() => handleIconClick("Face6Icon")}
        />
        <StyledIcon
          IconComponent={Favorite}
          isSelected={selectedIcon === "FavoriteIcon"}
          onClick={() => handleIconClick("FavoriteIcon")}
        />
        <StyledIcon
          IconComponent={FamilyRestroom}
          isSelected={selectedIcon === "FamilyRestroomIcon"}
          onClick={() => handleIconClick("FamilyRestroomIcon")}
        />
        <StyledIcon
          IconComponent={Festival}
          isSelected={selectedIcon === "FestivalIcon"}
          onClick={() => handleIconClick("FestivalIcon")}
        />
        <StyledIcon
          IconComponent={FitnessCenter}
          isSelected={selectedIcon === "FitnessCenterIcon"}
          onClick={() => handleIconClick("FitnessCenterIcon")}
        />
        <StyledIcon
          IconComponent={Forest}
          isSelected={selectedIcon === "ForestIcon"}
          onClick={() => handleIconClick("ForestIcon")}
        />
        <StyledIcon
          IconComponent={Gavel}
          isSelected={selectedIcon === "GavelIcon"}
          onClick={() => handleIconClick("GavelIcon")}
        />
        <StyledIcon
          IconComponent={Grade}
          isSelected={selectedIcon === "GradeIcon"}
          onClick={() => handleIconClick("GradeIcon")}
        />
        <StyledIcon
          IconComponent={Hardware}
          isSelected={selectedIcon === "HardwareIcon"}
          onClick={() => handleIconClick("HardwareIcon")}
        />
        <StyledIcon
          IconComponent={HealthAndSafety}
          isSelected={selectedIcon === "HealthAndSafetyIcon"}
          onClick={() => handleIconClick("HealthAndSafetyIcon")}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: window.innerWidth < 800 ? "wrap" : "nowrap",
          maxWidth: window.innerWidth < 800 ? "250px" : "100%",
        }}
      >
        <StyledIcon
          IconComponent={Headset}
          isSelected={selectedIcon === "HeadsetIcon"}
          onClick={() => handleIconClick("HeadsetIcon")}
        />
        <StyledIcon
          IconComponent={Hiking}
          isSelected={selectedIcon === "HikingIcon"}
          onClick={() => handleIconClick("HikingIcon")}
        />
        <StyledIcon
          IconComponent={HomeWork}
          isSelected={selectedIcon === "HomeWorkIcon"}
          onClick={() => handleIconClick("HomeWorkIcon")}
        />
        <StyledIcon
          IconComponent={Https}
          isSelected={selectedIcon === "HttpsIcon"}
          onClick={() => handleIconClick("HttpsIcon")}
        />
        <StyledIcon
          IconComponent={ImagesearchRoller}
          isSelected={selectedIcon === "ImagesearchRollerIcon"}
          onClick={() => handleIconClick("ImagesearchRollerIcon")}
        />
        <StyledIcon
          IconComponent={Instagram}
          isSelected={selectedIcon === "InstagramIcon"}
          onClick={() => handleIconClick("InstagramIcon")}
        />
        <StyledIcon
          IconComponent={Iron}
          isSelected={selectedIcon === "IronIcon"}
          onClick={() => handleIconClick("IronIcon")}
        />
        <StyledIcon
          IconComponent={Kitesurfing}
          isSelected={selectedIcon === "KitesurfingIcon"}
          onClick={() => handleIconClick("KitesurfingIcon")}
        />
        <StyledIcon
          IconComponent={LightMode}
          isSelected={selectedIcon === "LightModeIcon"}
          onClick={() => handleIconClick("LightModeIcon")}
        />
        <StyledIcon
          IconComponent={Lightbulb}
          isSelected={selectedIcon === "LightbulbIcon"}
          onClick={() => handleIconClick("LightbulbIcon")}
        />
        <StyledIcon
          IconComponent={Liquor}
          isSelected={selectedIcon === "LiquorIcon"}
          onClick={() => handleIconClick("LiquorIcon")}
        />
        <StyledIcon
          IconComponent={LocalFlorist}
          isSelected={selectedIcon === "LocalFloristIcon"}
          onClick={() => handleIconClick("LocalFloristIcon")}
        />
        <StyledIcon
          IconComponent={LocalGroceryStore}
          isSelected={selectedIcon === "LocalGroceryStoreIcon"}
          onClick={() => handleIconClick("LocalGroceryStoreIcon")}
        />
        <StyledIcon
          IconComponent={LunchDining}
          isSelected={selectedIcon === "LunchDiningIcon"}
          onClick={() => handleIconClick("LunchDiningIcon")}
        />
        <StyledIcon
          IconComponent={Luggage}
          isSelected={selectedIcon === "LuggageIcon"}
          onClick={() => handleIconClick("LuggageIcon")}
        />
        <StyledIcon
          IconComponent={MedicalServices}
          isSelected={selectedIcon === "MedicalServicesIcon"}
          onClick={() => handleIconClick("MedicalServicesIcon")}
        />
        <StyledIcon
          IconComponent={Palette}
          isSelected={selectedIcon === "PaletteIcon"}
          onClick={() => handleIconClick("PaletteIcon")}
        />
        <StyledIcon
          IconComponent={Pets}
          isSelected={selectedIcon === "PetsIcon"}
          onClick={() => handleIconClick("PetsIcon")}
        />
      </div>
    </>
  );
  return iconsList;
};

export const showIconPicked = (iconName: string) => {
  const IconComponent = iconMapping[iconName];

  if (!IconComponent) {
    return <img src={PoupaPigIcon} style={{ width: 24 }} />;
  }

  return <StyledIcon IconComponent={IconComponent} />;
};

export const numberToCurrency = (value?: number) => {
  const numberFormat = (value || 0.0).toFixed(2).replace(".", ",");

  if (numberFormat) {
    const [valuePart, decimalPart] = numberFormat.split(",");

    const stringFormated = `${parseFloat(valuePart || "0").toLocaleString(
      "pt-BR"
    )},${decimalPart || "00"}`;

    return stringFormated;
  }
  return "0,00";
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
