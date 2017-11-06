/* tslint:disable */

declare var Object: any;
export interface JadwalInterface {
  "id"?: number;
  "tgl_mulai"?: Date;
  "tgl_selesai"?: Date;
  "keterangan"?: string;
}

export class Jadwal implements JadwalInterface {
  "id": number;
  "tgl_mulai": Date;
  "tgl_selesai": Date;
  "keterangan": string;
  constructor(data?: JadwalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Jadwal`.
   */
  public static getModelName() {
    return "Jadwal";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Jadwal for dynamic purposes.
  **/
  public static factory(data: JadwalInterface): Jadwal{
    return new Jadwal(data);
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
      name: 'Jadwal',
      plural: 'Jadwals',
      path: 'Jadwals',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "tgl_mulai": {
          name: 'tgl_mulai',
          type: 'Date'
        },
        "tgl_selesai": {
          name: 'tgl_selesai',
          type: 'Date'
        },
        "keterangan": {
          name: 'keterangan',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
