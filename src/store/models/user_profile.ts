import { createModel, ModelConfig } from '@rematch/core';
import { ISODate, Genders } from '@app/core/interfaces';

export interface UserProfileState {
  _id: string;
  fullName: string;
  email: string;
  phoneNo: string;
  avatarUrl?: string;
  dob?: ISODate;
  address?: string;
  gender?: Genders;
  numberOfPets: number;
  firebaseId: string;
}

const defaultState = {
  _id: '',
  fullName: '',
  email: '',
  phoneNo: '',
  avatarUrl: undefined,
  dob: undefined,
  address: undefined,
  gender: undefined,
  numberOfPets: 0,
  firebaseId: '',
};

export const userProfile = createModel<UserProfileState, ModelConfig<UserProfileState>>({
  state: defaultState,
  reducers: {},
  effects: {},
});
