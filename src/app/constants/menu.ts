export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  
  {
    id: 'vendor',
    label: 'Vendor Profile',
    to: '/app/vendor',
    subs: [
      {
        label: 'Vendor List',
        to: '/app/vendor',
        subs:[
          {
            label:"Partener List",
            to:"/app/vendor"
          },
          {
            label:"Consumer List",
            to:"/app/consumer"
          }
        ]
      },
      {
        label:"Vendor Report",
      to:"/app/vendor" 
      }
    ]
  },
  {
    id: 'machine',
    label: 'Vending Machine',
    to: '/app/vendor',
    subs: [
      {
        label: 'Vending Machine List',
        to: '/app/vendor'
      },
      {
        label:"Vending Machine Report",
      to:"/app/vendor" 
      }
    ]
  },
  {
    id: 'Vending',
    label: 'Vending Profile',
    to: '/app/vendor',
    subs: [
      {
        label: 'Vending Request',
        to: '/app/vendor'
      },
      {
        label:"POs List",
      to:"/app/pos" 
      },
      {
        label:"SMS List",
      to:"/app/vendor" 
      }
    ]
  }
];
export default data;
