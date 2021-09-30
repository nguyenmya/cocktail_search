import React, { Fragment, useEffect, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { actFetchCockTailApi } from './modules/action.js'
import Layout from '../../components/Layout/Layout'
import { Table } from 'antd';
import { Input } from 'antd';
import {  SearchOutlined} from "@ant-design/icons";
const { Search } = Input;


export default function CocKTail(props) {
  console.log(props);

  const dispatch = useDispatch();
  const { cocktail } = useSelector(state => state.cockTailReducer)
  useEffect(() => {
    dispatch(actFetchCockTailApi());
  }, [])


  const columns = [
    {
      title: 'idDrink',
      dataIndex: 'idDrink',
    },
    {
      title: 'dateModified',
      dataIndex: 'dateModified',
      sorter: {
        compare: (a, b) => a.dateModified - b.dateModified,
        multiple: 3,
      },
    },
    {
      title: 'strAlcoholic ',
      dataIndex: 'strAlcoholic',
      sorter: {
        compare: (a, b) => a.strAlcoholic - b.strAlcoholic,
        multiple: 2,
      },
    },
    {
      title: 'strGlass ',
      dataIndex: 'strGlass',
      sorter: {
        compare: (a, b) => a.strGlass - b.strGlass,
        multiple: 2,
      },
    },
    {
      title: 'strDrink ',
      dataIndex: 'strDrink',
      sorter: {
        compare: (a, b) => a.strInstructions - b.strInstructions,
        multiple: 2,
      },
    },
    {
      title: 'strDrinkThumb',
      dataIndex: 'strDrinkThumb',
      render: (text, film) => {
        return <Fragment>
          <img src={film.strDrinkThumb} width={50} height={50} alt="" />
        </Fragment>
      },
    },
  ];




  const onSearch = values => {
    console.log("hhh",values);
    dispatch(actFetchCockTailApi(values));
  }
  const data = cocktail;

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Layout />
        </div>
        <div className="col-9 " style={{ marginTop: 100 }}>
          <Search className="mt-5 searchText"
            placeholder="pls search:"
            enterButton={<SearchOutlined />}
            onSearch={onSearch}
            size="small">
          </Search>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>

    </div>
  )
}
