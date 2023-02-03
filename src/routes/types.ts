import type { NativeStackScreenProps } from '@react-navigation/native-stack';
export type StackParamList = {
    Home: undefined,
    Medici: undefined,
    Medico: { doctorId: number },
    Visita: { visitId: number }
};

export type DoctorProps = NativeStackScreenProps<StackParamList, 'Medico'>;
export type DoctorPropsNavigation = DoctorProps['navigation'];
export type VisitProps = NativeStackScreenProps<StackParamList, 'Visita'>;
export type VisitPropsNavigation = VisitProps['navigation'];