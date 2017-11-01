import { Component, OnInit, Input, Output, EventEmitter, forwardRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CrudService } from '../library/_services/crud.service';
import * as global from '../share/global'

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};

@Component({
    selector: 'acSelect',
    templateUrl: './select.component.html',
    providers: [CrudService]
})
export class SelectComponent implements OnInit, AfterViewInit {
    @Input() conf: any;
    @Output() valueChange = new EventEmitter();

    val: any;
    private options: any;
    private jabatan: any;
    private produk: any;
    private jk: any;
    private cabang: any;
    private identitas: any;
    private membership: any;
    private staff: any;
    private satuanBarang: any;
    private barang: any;
    private service: any;
    private data = new Array;

    constructor(private crudService: CrudService) {
    }

    ngAfterViewInit() {
    }

    @Input()
    get value() {
        return this.val;
    }

    set value(v) {
        this.val = v;
        this.valueChange.emit(this.val);
    }

    cari() {

    };
    onSubmit() { alert('Masih Dalam Proses Pengembangan'); }; ngOnInit() {
        if (this.conf.query == null) {
            this.conf.query = {
                param: 'all',
                value: '#'
            }
        }

        if (this.conf.hidden == null) {
            this.conf.hidden = false;
        }

        if (this.conf.type == null) {
            this.conf.type = 'text';
        }
        if ((this.conf.judul == null || this.conf.judul == '') && this.conf.type != 'submit') {
            alert('Judul belum di isi');
        }
        if ((this.conf.readonly == null || this.conf.readonly == '') && this.conf.type != 'submit') {
            this.conf.readonly = '';
        }
        if ((this.conf.id == null || this.conf.id == '') && this.conf.type != 'submit') {
            // alert('Id belum di isi');
        }
        if (this.conf.placeholder == null || this.conf.placeholder == '') {
            this.conf.placeholder = this.conf.judul;
        }
        if (this.conf.disabled == null || this.conf.disabled == '') {
            this.conf.disabled = 'false';
        }
        if (this.conf.name == null || this.conf.name == '') {
            this.conf.name = this.conf.id;
        }

        if (this.conf.options == null || this.conf.options == '') {
            this.conf.name = [];
        } else {
            this.options = this.conf.options;
        }
    }



}