import type { NativeStackScreenProps } from '@react-navigation/native-stack';
export type StackParamList = {
    Home: undefined,
    Medici: undefined,
    Farmaci: undefined,
    Medico: { doctorId: number },
    Visita: { visitId: number },
    AggiungiMedico: undefined,
    AggiungiFarmaco: undefined,
    AggiungiVisita: undefined
};

export type DoctorProps = NativeStackScreenProps<StackParamList, 'Medico'>;
export type DoctorPropsNavigation = DoctorProps['navigation'];
export type AddDoctorProps = NativeStackScreenProps<StackParamList, 'AggiungiMedico'>;
export type AddDoctorPropsNavigation = AddDoctorProps['navigation'];
export type VisitProps = NativeStackScreenProps<StackParamList, 'Visita'>;
export type VisitPropsNavigation = VisitProps['navigation'];
export type DrugsProps = NativeStackScreenProps<StackParamList, 'Farmaci'>;
export type DrugsPropsNavigation = DrugsProps['navigation'];
export type AddDrugProps = NativeStackScreenProps<StackParamList, 'AggiungiFarmaco'>;
export type AddDrugPropsNavigation = AddDrugProps['navigation'];
export type AddVisitProps = NativeStackScreenProps<StackParamList, 'AggiungiVisita'>;
export type AddVisitPropsNavigation = AddVisitProps['navigation'];