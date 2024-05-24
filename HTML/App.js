import logo from './logo.svg';
import'./App.js';
function Cal(){
    return()
       <div className="containner">
        <div F="row">
            <div className="col-sm-12 col-md-6 offset-md-3 d-flex">
                <div className="cal-container m-auto mt-3 p-4 shadow">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control input-call" id="txtCal">
                        </div>
                    </div>
                    <div className="row action mt-2"></div>
                    <div className="row number mt-3"></div>
                    <div className="col-9">

                        <div className="col">
                            <button className="btn btn-secondary w-100" onclick="addValue('+')">+</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary w-100" onclick="addValue('-')">-</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary w-100" onclick="addValue('*')">*</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary w-100" onclick="addValue('/')">/</button>
                        </div>

                    </div>
                    <div className="row mubers mt-3">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-4">
                                    <button className="btn btn-secondary w-100"  onclick="addValue('+')">7</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue()" >8</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('9')" >9</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('5')" >5</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('6')" >6</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('7')">7</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('1')" >1</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('2')">2</button>
                                </div>
                                <div>
                                    <button className="btn btn-secondary w-100" onclick="addValue('3')">3</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <button className="exclar" onclick="excustate"
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </body>
<style>
    .cal-container {
        background-color: rgb(14, 25, 25);
        min-height: 400px;
    }
    .input-cal{
        height: 70px;
    }
</style>
</html>
}
