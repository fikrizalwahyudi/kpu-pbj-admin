/* tslint:disable */
import {
  Pendidikan_terakhir
} from '../index';

declare var Object: any;
export interface ProfileInterface {
  "id"?: number;
  "nama"?: string;
  "tempat_lahir"?: string;
  "tgl_lahir"?: Date;
  "alamat"?: string;
  "id_pendidikan_terakhir"?: number;
  "photo"?: string;
  pendidikan_terakhir?: Pendidikan_terakhir;
}

export class Profile implements ProfileInterface {
  "id": number;
  "nama": string;
  "tempat_lahir": string;
  "tgl_lahir": Date;
  "alamat": string;
  "id_pendidikan_terakhir": number;
  "photo": string;
  pendidikan_terakhir: Pendidikan_terakhir;
  constructor(data?: ProfileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Profile`.
   */
  public static getModelName() {
    return "Profile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Profile for dynamic purposes.
  **/
  public static factory(data: ProfileInterface): Profile{
    return new Profile(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Profile',
      plural: 'Profiles',
      path: 'Profiles',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nama": {
          name: 'nama',
          type: 'string'
        },
        "tempat_lahir": {
          name: 'tempat_lahir',
          type: 'string'
        },
        "tgl_lahir": {
          name: 'tgl_lahir',
          type: 'Date'
        },
        "alamat": {
          name: 'alamat',
          type: 'string'
        },
        "id_pendidikan_terakhir": {
          name: 'id_pendidikan_terakhir',
          type: 'number'
        },
        "photo": {
          name: 'photo',
          type: 'string'
        },
      },
      relations: {
        pendidikan_terakhir: {
          name: 'pendidikan_terakhir',
          type: 'Pendidikan_terakhir',
          model: 'Pendidikan_terakhir'
        },
      }
    }
  }
}
