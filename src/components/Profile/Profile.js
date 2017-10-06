import React, { Component } from 'react';
import './Profile.css';
import Nav from '../Nav/Nav';


export default class Profile extends Component {
    render() {
        return (
            <div className='App'>
                <Nav />
                <h2>Profile Page</h2>
                <div className='profile-tile'>
                    <button>Update</button>
                    <button>Cancel</button>

                    Gender <select>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    Hair Color <select>
                        <option></option>
                        <option>Brown</option>
                        <option>Blond</option>
                        <option>Black</option>
                        <option>Gray</option>
                    </select>


                    Eye Color<select>
                        <option></option>
                        <option>Blue</option>
                        <option>Brown</option>
                        <option>Green</option>
                    </select>

                    Hobby <select>
                        <option></option>
                        <option>Video Games</option>
                        <option>Hiking</option>
                        <option>Fishing</option>
                        <option>Rafting</option>
                    </select>

                    Birthday Day <select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>

                    Birthday Month <select>
                        <option></option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    Birthday Year <input type='text' />

                </div>
            </div>
        )
    }
}