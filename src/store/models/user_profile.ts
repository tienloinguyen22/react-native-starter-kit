import { createModel } from '@rematch/core';
import produce from 'immer';
import { UserProfileState, UserPayload, showNotification, UserResponse, getIdToken, getError } from '@app/core';
import { getApiService, UserCurrentPackage } from '@app/services';
import { config } from '@app/config';

const defaultState = {
  phoneNo: '',
  email: '',
  loginType: '',
  uid: '',
  idToken: '',
  fullName: '',
  gender: '',
  userId: 0,
  userIdString: '',
  avatar: '',
  lineNumber: '',
  address: {},
  dob: 0,
  notificationSettings: {},
  hasMissingPet: false,
};
export const userProfile = createModel<UserProfileState>({
  state: defaultState,
  reducers: {
    updateProfile: produce((draftState: UserProfileState, payload: UserResponse) => {
      draftState.phoneNo = payload.phoneNo;
      draftState.lineNumber = payload.lineNumber;
      draftState.email = payload.email;
      draftState.loginType = payload.loginType;
      draftState.uid = payload._id;
      draftState.idToken = payload.idToken;
      draftState.fullName = payload.fullName;
      draftState.gender = payload.gender;
      draftState.userId = payload.userId;
      draftState.address = payload.address;
      draftState.dob = payload.dob;
      draftState.userIdString = payload.userIdString;
      draftState.avatar = payload.avatarUrl ? `${config.domainAvatar}/uploads/${payload.avatarUrl}` : '';
      draftState.currentPackage = payload.currentPackage;
      draftState.notificationSettings = payload.notificationSettings;
      draftState.hasMissingPet = payload.hasMissingPet;
    }),
    updateAvatarUser: produce((draftState: UserProfileState, payload: string) => {
      draftState.avatar = `${config.domainAvatar}/uploads/${payload}`;
    }),
    resetUserProfile: produce((draftState: UserProfileState) => {
      draftState.phoneNo = '';
      draftState.lineNumber = '';
      draftState.email = '';
      draftState.loginType = '';
      draftState.uid = '';
      draftState.idToken = '';
      draftState.fullName = '';
      draftState.gender = '';
      draftState.userId = 0;
      draftState.dob = 0;
      draftState.userIdString = '';
      draftState.avatar = '';
      draftState.address = {
        detail: '',
        district: {
          value: '',
          label: '',
        },
        province: {
          label: '',
          value: '',
        },
        ward: {
          label: '',
          value: '',
        },
      };
    }),
    updateUserPackage: produce((draftState: UserProfileState, payload: UserCurrentPackage) => {
      draftState.currentPackage = payload;
    }),
  },
  effects: {
    async getUserProfile(payload: UserPayload): Promise<void> {
      try {
        const idToken = await getIdToken();
        const service = getApiService(idToken);
        const response = await service.findProfile(payload.uid);

        if (!response) {
          return;
        }

        const newUser = {
          ...response,
          idToken: payload.idToken,
        };

        this.updateProfile(newUser);
      } catch (err) {
        showNotification({
          type: 'error',
          message: getError(err),
        });
      }
    },
    // TODO: Optional args breaks TypeScript autocomplete (e.g. payload: number = 1)
  },
});
