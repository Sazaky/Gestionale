import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type {
    CompositeScreenProps,
    NavigatorScreenParams,
  } from '@react-navigation/native';

export type StackParamList = {
    Medici: undefined;
    Medico: { doctorId: number },
};

export type DoctorProps = NativeStackScreenProps<StackParamList, 'Medico'>;
export type DoctorPropsNavigation = DoctorProps['navigation'];
